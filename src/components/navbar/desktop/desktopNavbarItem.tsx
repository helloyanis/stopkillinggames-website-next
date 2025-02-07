import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box, Button, Skeleton } from '@mui/material';
import { NavbarItemProps } from '@/components/navbar/interfaces';

export default function DesktopNavbarItem({ translationKey, path }: NavbarItemProps) {
    const { t, i18n } = useTranslation("navbar");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        }
    }, [i18n.isInitialized]);

    return (
        <Link href={path}>
            {isReady ? (
                <Box>
                    <Button variant="contained" disableElevation>{t(translationKey)}</Button>
                </Box>
            ) : (
                <Skeleton variant='text' width={100} height={40} className='mx-4'/>
            )}
        </Link>
    );
}
