import React from 'react'

import IphoneLeft from '../../assets/Images/Page 3 images/left-iphone.svg'
import IphoneMiddle from '../../assets/Images/Page 3 images/iphone-middle.svg'
import IphoneRight from '../../assets/Images/Page 3 images/right-iphone.svg'

const DesktopImages = () => {
  return (
    
    <div className="desktop-img-container">
        <div className="carousel-img">
            <img className="img-desktop" src={IphoneLeft} alt="" />
        </div>
        <div className="carousel-img">
            <img className="img-desktop" src={IphoneMiddle} alt="" />
        </div>
        <div className="carousel-img">
            <img className="img-desktop" src={IphoneRight} alt="" />
        </div>
    </div>

  )
}

export default DesktopImages