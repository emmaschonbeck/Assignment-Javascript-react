import React, { useEffect, useState } from 'react';
import { enableDarkMode, disableDarkMode, initializeDarkMode } from '../Utils/darkmode';

const DarkmodeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Använd useState för att spåra tillståndet

  useEffect(() => {
    initializeDarkMode(); // Initiera dark mode vid sidladdning
    setIsDarkMode(localStorage.getItem('darkmode') === 'on'); // Ställ in tillståndet
  }, []);

  const handleChange = (event) => {
    if (event.target.checked) {
      enableDarkMode();
      setIsDarkMode(true); // Uppdatera tillståndet
    } else {
      disableDarkMode();
      setIsDarkMode(false); // Uppdatera tillståndet
    }
  };

  return (
    <label>
      <input 
        type="checkbox" // Se till att det är "checkbox"
        id='darkmode-switch'
        onChange={handleChange}
        checked={isDarkMode} // Använd "checked" istället för "defaultChecked"
      />
      Mörkt läge
    </label>
  );
};

export default DarkmodeSwitch;