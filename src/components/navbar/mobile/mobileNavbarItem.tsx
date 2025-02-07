import { Box, Button, MenuItem, Skeleton } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavbarItemProps } from "../interfaces";

export default function MobileNavbarItem({ translationKey, path }: NavbarItemProps) {
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
                <MenuItem onClick={() => {}}>{t(translationKey)}</MenuItem>
            ) : (
                <Skeleton variant='text' width={100} height={40} className='mx-4'/>
            )}
        </Link>
    );
}