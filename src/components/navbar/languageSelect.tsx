import { FormControl, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const languageMap: { [key: string]: string } = {
    en: "🇬🇧 English",
    bg: "🇧🇬 Български",
    ca: "🇪🇸 Català",
    cs: "🇨🇿 Čeština",
    da: "🇩🇰 Dansk",
    de: "🇩🇪 Deutsch",
    fr: "🇫🇷 Français",
    el: "🇬🇷 Ελληνικά",
    es: "🇪🇸 Español",
    et: "🇪🇪 Eesti",
    fi: "🇫🇮 Suomi",
    ga: "🇮🇪 Gaeilge",
    hr: "🇭🇷 Hrvatski",
    hu: "🇭🇺 Magyar",
    it: "🇮🇹 Italiano",
    lb: "🇱🇺 Lëtzebuergesch",
    lv: "🇱🇻 Latviešu",
    mt: "🇲🇹 Malti",
    nl: "🇳🇱 Nederlands",
    no: "🇳🇴 Norsk",
    pl: "🇵🇱 Polski",
    pt: "🇵🇹 Português",
    ro: "🇷🇴 Română",
    rs: "🇷🇸 Srpski",
    ru: "🇷🇺 Русский",
    si: "🇸🇮 Slovenščina",
    sv: "🇸🇪 Svenska",
    tr: "🇹🇷 Türkçe",
    uk: "🇺🇦 Українська",
    eo: "🌍 Esperanto",
};

export default function LanguageSelect() {
    const { i18n } = useTranslation("navbar");
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        }
    }, [i18n.isInitialized]);

    useEffect(() => {
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            {isReady ? (
                <>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                        labelId="language-select-label"
                        id="language-select"
                        label="Language"
                        value={selectedLanguage}
                        onChange={(event) => {
                            setSelectedLanguage(event.target.value as string);
                            i18n.changeLanguage(event.target.value as string);
                        }}>
                        {Object.entries(languageMap).map(([key, language]) => (
                            <MenuItem key={key} value={key}>{language}</MenuItem>
                        ))}
                    </Select>
                </>

            ) : (
                <Skeleton variant='text' width={100} height={40} className='mx-4'/>
            )}
            
        </FormControl>
    );
}