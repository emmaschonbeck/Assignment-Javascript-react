import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Hanterar öppning och stängning av menyn

  const handleClick = () => {
    setIsOpen(!isOpen);  // Växlar tillståndet för att öppna/stänga menyn
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="mobile-menu-container">
      <button className="btn-mobile-menu" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}> 
        <div className={`mobile-bar ${isOpen ? 'open' : ''}`}>

          <button className='menu-close' onClick={closeMenu}>
            <i className='fa-solid fa-xmark'></i>
          </button>

          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;