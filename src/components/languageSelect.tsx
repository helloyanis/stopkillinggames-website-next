import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
    const { t, i18n } = useTranslation();
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <Select
            value={i18n.language}
            onChange={(event) => i18n.changeLanguage(event.target.value as string)}
            >
                <MenuItem value="en">🇬🇧 English</MenuItem>
                <MenuItem value="fr">🇫🇷 Français</MenuItem>
            </Select>
        </FormControl>
        </Box>
    )
}