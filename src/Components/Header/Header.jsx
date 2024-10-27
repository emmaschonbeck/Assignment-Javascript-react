import React from 'react'
import LogoNavbar from './LogoNavbar'
import DarkModeSwitch from './DarkModeSwitch'
import BtnSignIn from './BtnSignIn'
import MobileMenu from './MobileMenu'




const Header = () => {
  return (

    <>
        <header id="header">
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