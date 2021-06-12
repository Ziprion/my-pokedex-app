import { useSelector } from 'react-redux';

export const setDefaultTheme = () => {
  const defaultTheme = 'light';

  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', defaultTheme);
  }

  return localStorage.getItem('theme');
};

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);

  return newTheme;
};

export const isDarkTheme = () => {
  const currentTheme = useSelector((state) => state.uiState.theme);
  return currentTheme === 'dark';
};
