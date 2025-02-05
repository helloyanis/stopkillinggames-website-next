const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  localePath: '/locales', // Chemin des fichiers de traduction
};

export const getOptions = () => ({
  ...config.i18n,
  backend: {
    loadPath: `${config.localePath}/{{lng}}/{{ns}}.json`,
  },
});

export default config;