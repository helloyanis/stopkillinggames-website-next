import Image from "next/image";
import { NavbarProps } from "../interfaces";
import { Box, Container, IconButton, Menu, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import LanguageSelect from "../languageSelect";
import React from "react";
import MobileNavbarItem from "./mobileNavbarItem";

export default function MobileNavbar({pages}: NavbarProps) {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MobileNavbarItem translationKey={page.translationKey} path={page.path} key={page.translationKey} />
                ))}
                </Menu>
                <Box sx={{ flexGrow: 1 }} />
                <Link href="/">
                    <Image src="/assets/images/skglogo.svg" alt="logo" width={70} height={32.85} className="mx-3"/>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <LanguageSelect />
            </Toolbar>
        </Container>
    );
}