import React from 'react'
import BtnDownloadApp from './BtnDownloadApp'
import DiscoverMoreBtn from './DiscoverMoreBtn'
import HeroPhoneImg from './HeroPhoneImg'

const Hero = () => {
  return (
    
    <>
        <section id="hero">
            <div className="container">
                <div className="headline">
                    <h1>Manage All Your <br></br>Money in One App</h1>
                </div>
                <div className="content">
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <BtnDownloadApp />
                    <DiscoverMoreBtn />
                </div>

                <HeroPhoneImg />
            </div>
        </section>
    </>

  )
}

export default Hero