import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import ruTranslations from './locales/ru/translation.json';
import esTranslations from './locales/es/translation.json';
import zhTranslations from './locales/zh/translation.json';
import arTranslations from "./locales/ar/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            ru: { translation: ruTranslations },
            es: { translation: esTranslations },
            zh: { translation: zhTranslations },
            ar: { translation: arTranslations }
        },
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
