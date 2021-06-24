import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { setDefaultLanguage, getCurrentLanguage } from '@utils/languageUtils';
import resources from './locales';

setDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    lng: getCurrentLanguage(),
    fallbackLng: false,
    resources,
  });

export default i18n;
