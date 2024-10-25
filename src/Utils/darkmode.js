
// src/utils/darkMode.js

export const enableDarkMode = () => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('darkmode', 'on');
};

export const disableDarkMode = () => {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('darkmode', 'off');
};

export const initializeDarkMode = () => {
  const hasDarkmode = localStorage.getItem('darkmode');

  if (hasDarkmode === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode(); // Aktivera dark mode om systemet föredrar det
    } else {
      disableDarkMode(); // Annars inaktivera dark mode
    }
  } else if (hasDarkmode === 'on') {
    enableDarkMode(); // Aktivera dark mode om det är inställt på 'on'
  } else {
    disableDarkMode(); // Inaktivera dark mode om det är inställt på 'off'
  }
};
