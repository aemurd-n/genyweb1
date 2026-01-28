import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ro'],
    defaultNS: 'common',
    ns: ['common', 'home', 'services', 'contact', 'faq', 'blog', 'blog-posts'],

    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'geny-language',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false, // Avoid flash of fallback content
    },

    resources: {
      en: {
        common: require('./locales/en/common.json'),
        home: require('./locales/en/home.json'),
        services: require('./locales/en/services.json'),
        contact: require('./locales/en/contact.json'),
        faq: require('./locales/en/faq.json'),
        blog: require('./locales/en/blog.json'),
        'blog-posts': require('./locales/en/blog-posts.json'),
      },
      ro: {
        common: require('./locales/ro/common.json'),
        home: require('./locales/ro/home.json'),
        services: require('./locales/ro/services.json'),
        contact: require('./locales/ro/contact.json'),
        faq: require('./locales/ro/faq.json'),
        blog: require('./locales/ro/blog.json'),
        'blog-posts': require('./locales/ro/blog-posts.json'),
      },
    },
  });

export default i18n;
