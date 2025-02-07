"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [
      "en",
      "bg",
      "ca",
      "cs",
      "da",
      "de",
      "fr",
      "el",
      "es",
      "et",
      "fi",
      "ga",
      "hr",
      "hu",
      "it",
      "lb",
      "lv",
      "mt",
      "nl",
      "no",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "si",
      "sv",
      "tr",
      "uk",
      "eo"
    ],
    fallbackLng: 'en',
    debug: false,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;