import React from 'react'

import IphoneLeft from '../../assets/Images/Page 3 images/left-iphone.svg'
import IphoneMiddle from '../../assets/Images/Page 3 images/iphone-middle.svg'
import IphoneRight from '../../assets/Images/Page 3 images/right-iphone.svg'

const DesktopImages = () => {
  return (
    
    <div class="desktop-img-container">
        <div class="carousel-img">
            <img class="img-desktop" src={IphoneLeft} alt="" />
        </div>
        <div class="carousel-img">
            <img class="img-desktop" src={IphoneMiddle} alt="" />
        </div>
        <div class="carousel-img">
            <img class="img-desktop" src={IphoneRight} alt="" />
        </div>
    </div>

  )
}

export default DesktopImages