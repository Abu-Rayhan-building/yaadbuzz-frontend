import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fa from './fa.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  fa: {
    translation: fa,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fa',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
