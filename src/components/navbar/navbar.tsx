"use client"
import { AppBar, Box } from '@mui/material';
import DesktopNavbar from './desktop/desktopNavbar';
import MobileNavbar from './mobile/mobileNavbar';

export default function Navbar() {
  const pages = [
    { translationKey: "eci", path: "/eci" },
    { translationKey: "takeAction", path: "/countries" },
    { translationKey: "faq", path: "/faq" },
    { translationKey: "privacy", path: "/privacy" },
  ];

  return (
    <AppBar position="static" color="primary" sx={{height: 72}}> 
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <MobileNavbar pages={pages} />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <DesktopNavbar pages={pages} />
      </Box>
    </AppBar>
  );
}