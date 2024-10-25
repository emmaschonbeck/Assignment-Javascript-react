import React from 'react'
import LogoNavbar from './LogoNavbar'
import BtnDarkmode from './BtnDarkmode'
import BtnSignIn from './BtnSignIn'
import MobileMenu from './MobileMenu'



const Header = () => {
  return (

    <>
        <header id="header">
            <div className="container">

                <LogoNavbar />
                <BtnDarkmode />
                <BtnSignIn />
                <MobileMenu />

            </div>
        </header>

    </>
  )
}

export default Header