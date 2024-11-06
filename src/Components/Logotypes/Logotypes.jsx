import React from 'react'

import Logo1 from '../../assets/Images/Page 2 images/logo1.svg'
import Logo2 from '../../assets/Images/Page 2 images/logo2.svg'
import Logo3 from '../../assets/Images/Page 2 images/logo3.svg'
import Logo4 from '../../assets/Images/Page 2 images/logo4.svg'
import Logo5 from '../../assets/Images/Page 2 images/logo5.svg'
import Logo6 from '../../assets/Images/Page 2 images/logo6.svg'

const Logotypes = () => {
  return (
    
    <section id="logotypes">
        <div className="container">
            <div className="logotypes-row">
                <div className="logo-card">
                    <img src={Logo1} alt="logotypes" />
                </div>
                <div className="logo-card">
                    <img src={Logo2} alt="logotypes" />
                </div>
                <div className="logo-card logo-align">
                    <img src={Logo3} alt="logotypes" />
                </div>
                <div className="logo-card">
                    <img src={Logo4} alt="logotypes" />
                </div>
                <div id="desktop-add" className="logo-card">
                    <img src={Logo5} alt="logotypes" />
                </div>
                <div id="desktop-add" className="logo-card logo-shadow">
                    <img src={Logo6} alt="logotypes" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Logotypes