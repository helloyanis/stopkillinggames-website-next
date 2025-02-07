import Image from "next/image";
import { NavbarProps } from "../interfaces";
import DesktopNavbarItem from "./desktopNavbarItem";
import { Box, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import LanguageSelect from "../languageSelect";

export default function DesktopNavbar({pages}: NavbarProps) {
    return (
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Link href="/">
                    <Image src="/assets/images/skglogo.svg" alt="logo" width={70} height={32.85} className="mx-3"/>
                </Link>
                {pages.map((page, index) => (
                    <DesktopNavbarItem translationKey={page.translationKey} path={page.path} key={index} />
                ))}
                <Box sx={{ flexGrow: 1 }} />
                <LanguageSelect />
            </Toolbar>
        </Container>
    );
}