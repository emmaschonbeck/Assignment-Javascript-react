import React from 'react'

import TabletLeftImage from '../../assets/Images/Page 3 images/left-img-tablet.svg'
import TabletMiddleImage from '../../assets/Images/Page 3 images/middle-img-tablet.svg'
import TabletRightImage from '../../assets/Images/Page 3 images/right-img-tablet.svg'

const TabletImages = () => {
  return (
    
    <div class="tablet-img-container">
        <div class="carousel-img">
            <img class="img-tablet" src={TabletLeftImage} alt="" />
        </div>
        <div class="carousel-img">
            <img class="img-tablet" src={TabletMiddleImage} alt="" />
        </div>
        <div class="carousel-img">
            <img class="img-tablet" src={TabletRightImage} alt="" />
        </div>
    </div>

  )
}

export default TabletImages