"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { AppBar, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Skeleton, Toolbar } from "@mui/material";
import Image from "next/image";
import LanguageSelect from "./languageSelect";

export default function Navbar() {
  const { t, i18n } = useTranslation("navbar");
  const [isReady, setIsReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
            <Link href="/" shallow>
                <div>
                <Image src="/images/skglogo.svg" alt="logo" width={50} height={50} />
                </div>
            </Link>
            <Link href="/eci" shallow>
                <div>
                {isReady ? <Button color="inherit">{t("eci")}</Button> : <Skeleton width={100} height={45} />}
                </div>
            </Link>
            <Link href="/countries" shallow>
                <div>
                {isReady ? <Button color="inherit">{t("countries")}</Button> : <Skeleton width={100} height={45} />}
                </div>
            </Link>
            <Box flexGrow={1}/>
            <div className="m-3">
                <LanguageSelect />
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
