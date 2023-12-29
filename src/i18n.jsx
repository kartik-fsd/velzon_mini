import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationGr from './locales/gr.json';
import translationIT from './locales/it.json';
import translationRS from './locales/ru.json';
import translationSP from './locales/sp.json';
import translationENG from './locales/en.json';
import translationCN from './locales/ch.json';
import translationFR from './locales/fr.json';
import translationAR from './locales/ar.json';

const resources = {
  gr: { translation: translationGr },
  it: { translation: translationIT },
  rs: { translation: translationRS },
  sp: { translation: translationSP },
  en: { translation: translationENG },
  cn: { translation: translationCN },
  fr: { translation: translationFR },
  ar: { translation: translationAR },
};

const language = localStorage.getItem('I18N_LANGUAGE');
if (!language) {
  localStorage.setItem('I18N_LANGUAGE', 'en');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
    debug: false, // Set it to true to enable logging for i18n
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Use suspense in React for loading translations
    },
  });

export default i18n;
