import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import language files
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import plTranslation from './locales/pl.json';

// Initialize i18next
i18n
  .use(initReactI18next) // bind react-i18next to i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      pl: { translation: plTranslation }
    },
    lng: localStorage.getItem('lng') || 'en', // default language
    fallbackLng: 'en', // fallback language if the selected language file is missing
    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });
