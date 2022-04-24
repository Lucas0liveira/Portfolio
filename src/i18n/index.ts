import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt-br.json';
import ENUS from './locales/en-us.json'

const selectedLanguage = localStorage.getItem('lang')

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": PTBR,
      "en-us": ENUS
    },
    lng: selectedLanguage || navigator.language,
    fallbackLng: 'enus',
    interpolation: {
      escapeValue: false
    } 
  })

export default i18n;