import { ENV } from '../lib/env';
import { firestore, functions } from '../lib/firebase';
import axios from 'axios';

// 固定パラメーター
const PARAMS = {
  grant_type: 'authorization_code',
  redirect_uri: process.env.NODE_ENV === 'production' ? ENV.lineCallbackUrlProd : ENV.lineCallbackUrl,
  client_id: 'AD5VheoYvTXjnloQSgGdQY',
  client_secret: ENV.lineClientSecret,
} as const;

type Data = {
  code: string;
};

export const claimAccessToken = functions.region('asia-northeast2').https.onCall(async ({ code }: Data, ctx) => {
  // 認証されていないリクエストを弾く
  const uid = ctx.auth?.uid;
  if (!uid) {
    throw new functions.https.HttpsError('unauthenticated', 'user is not authenticated');
  }

  // トークンが既に発行されている場合，新規発行を行わず終了
  const tokenDoc = await firestore.collection('lineAccessTokens').doc(uid).get();
  if (tokenDoc.exists) {
    return;
  }

  // トークンの発行
  const res = await axios
    .post<{ access_token: string }>(
      'https://notify-bot.line.me/oauth/token',
      new URLSearchParams({ ...PARAMS, code }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .catch((err) => {
      functions.logger.error(err);
      throw new functions.https.HttpsError('unknown', 'unknwon error uccurs while requesting LINE access token');
    });

  // トークンをユーザーと紐づけて永続化
  await firestore.collection('lineAccessTokens').doc(uid).set({
    uid,
    lineAccessToken: res.data.access_token,
  });
});
