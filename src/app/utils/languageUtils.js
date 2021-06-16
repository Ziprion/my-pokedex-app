import { useTranslation } from 'react-i18next';

export const setDefaultLanguage = () => {
  const defaultLanguage = 'ru';

  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', defaultLanguage);
  }
};

export const getCurrentLanguage = () => localStorage.getItem('language');

export const toggleLanguage = () => {
  const currentLanguage = localStorage.getItem('language');
  const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  localStorage.setItem('language', newLanguage);

  return newLanguage;
};

export const loc = (text) => {
  const { t } = useTranslation();
  return t(text);
};
