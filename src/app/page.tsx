"use client"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);
  return (
    <Box className="max-w-[900px] m-auto" sx={{ display: 'flex', justifyContent: 'center', height: 'calc(100vh - 64px)' }}>
      {isReady ? (
        //Page content
        <Box>
          <Typography variant='h2' className='font-bold m-3 text-center'>{t('title')}</Typography>
          <Typography variant='subtitle1'>{t('content1')}</Typography>
        </Box>
      ) : (
        //Loading spinner while translations load
        <CircularProgress className='m-auto' />
      )
      }
    </Box>
  );
}
