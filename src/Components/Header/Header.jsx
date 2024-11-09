import React from 'react'
import { useLocation } from 'react-router-dom'
import LogoNavbar from './LogoNavbar'
import DarkModeSwitch from './DarkModeSwitch'
import BtnSignIn from './BtnSignIn'
import MobileMenu from './MobileMenu'




const Header = () => {

  const location = useLocation();

  const headerClass = location.pathname === '/' ? 'header-home' : location.pathname === '/Contact' ? 'header-contact' : 'header-default';

  return (

    <>
        <header id="header" className={headerClass}>
            <div className="container">

                <LogoNavbar />
                <DarkModeSwitch />
                <BtnSignIn />
                <MobileMenu />

            </div>
        </header>

    </>
  )
}

export default Header