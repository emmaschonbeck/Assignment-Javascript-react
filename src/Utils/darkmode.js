


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
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  } else if (hasDarkmode === 'on') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
