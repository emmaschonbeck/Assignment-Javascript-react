import React, { useEffect, useState } from 'react'

// Med hjälp av ChatGPT

const DarkModeSwitch = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setisDarkMode(newMode)

    if(newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    
    if(savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setisDarkMode(true)
    }
    else{
      document.documentElement.classList.remove('dark');
      setisDarkMode(false)
    }

}, [])


  return (
    <>
        <div>
            <span className="label">Dark mode</span>
        </div>
        <div className="btn-toggle-switch">
            <label className="toggle-switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
            </label> 
        </div>
    </>
  )
}


export default DarkModeSwitch