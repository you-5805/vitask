import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DAYS } from '@/const/days';
import { Spacer } from '@/components/Spacer';
import { usePage } from './hook';
import { Box, Button, Card, Typography } from '@mui/material';
import { FaCheck, FaPlus, FaTrash, FaTimes } from 'react-icons/fa';

const Page: NextPage = () => {
  const { lectures, deleteLecture, deleting, setDeleting, isNotifyAPIAuthorized, closeNotifySuggestion, close } =
    usePage();

  return (
    <>
      {!isNotifyAPIAuthorized && !closeNotifySuggestion && (
        <Card
          sx={{
            borderRadius: 2,
            backgroundColor: '#f4f4f4',
            p: 2,
            mt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/register-notification">
            <Typography sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#FDC731' }}>
              π LINE Notifyγ«η»ι²γγ¦οΌζζ₯­εΎγ«ιη₯γεγεγ
            </Typography>
          </Link>
          <FaTimes cursor="pointer" onClick={close} />
        </Card>
      )}
      <Box sx={{ mt: 4, mx: 4 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={24} fontWeight="bold">
            Lectures
          </Typography>
          <Box display="flex" justifyContent="space-between">
            {deleting !== 'lecture' && (
              <Link href="/new-lecture">
                <Button variant="contained">
                  <FaPlus color="white" />
                </Button>
              </Link>
            )}
            <Spacer w={20} />
            {deleting === 'lecture' ? (
              <Button variant="contained" sx={{ backgroundColor: 'green' }} onClick={() => setDeleting(null)}>
                <FaCheck color="white" />
              </Button>
            ) : (
              <Button variant="contained" sx={{ backgroundColor: 'gray' }} onClick={() => setDeleting('lecture')}>
                <FaTrash color="white" />
              </Button>
            )}
          </Box>
        </Box>
        <Box component="ul">
          {lectures &&
            lectures.map((lecture) => (
              <Box
                component="li"
                key={lecture.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={4}
              >
                <Typography fontSize={16}>{lecture.name}</Typography>
                {deleting === 'lecture' ? (
                  <Box py={0.4} onClick={() => deleteLecture(lecture)}>
                    <FaTrash size={24} color="red" style={{ cursor: 'pointer' }} />
                  </Box>
                ) : (
                  <Box display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
                    <Typography paragraph sx={{ m: 0 }}>
                      {DAYS[lecture.dayId]} {lecture.period}ι
                    </Typography>
                    {/* <Button variant="outlined" startIcon={<FaPlus size={16} />}>
                      <Typography paragraph sx={{ m: 0 }}>
                        θͺ²ι‘γθΏ½ε 
                      </Typography>
                    </Button> */}
                  </Box>
                )}
              </Box>
            ))}
          {lectures?.length === 0 && deleting !== 'lecture' && (
            <Box display="flex" flexDirection="column" textAlign="center">
              <Box sx={{ display: 'inline-block' }}>
                <Image src="/img/empty.png" width={300} height={300} />
              </Box>
              <Typography>γΎγ θ¬ηΎ©γγγγΎγγγγΎγγ―θ¬ηΎ©γη»ι²γγΎγγγγ</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Page;
