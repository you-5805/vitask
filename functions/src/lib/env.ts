import * as functions from 'firebase-functions';

const config = functions.config();
const env = config['vitask-dd803'];

export const ENV = {
  fromEmail: env.fromemail as string,
  mailAppPassword: env.mailapppassword as string,
  lineCallbackUrl: env.linecallbackurl as string,
  lineClientSecret: env.lineclientsecret as string,
};
