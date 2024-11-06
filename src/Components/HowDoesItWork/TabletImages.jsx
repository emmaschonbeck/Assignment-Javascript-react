import React from 'react'

import TabletLeftImage from '../../assets/Images/Page 3 images/left-img-tablet.svg'
import TabletMiddleImage from '../../assets/Images/Page 3 images/middle-img-tablet.svg'
import TabletRightImage from '../../assets/Images/Page 3 images/right-img-tablet.svg'

const TabletImages = () => {
  return (
    
    <div className="tablet-img-container">
        <div className="carousel-img">
            <img className="img-tablet" src={TabletLeftImage} alt="" />
        </div>
        <div className="carousel-img">
            <img className="img-tablet" src={TabletMiddleImage} alt="" />
        </div>
        <div className="carousel-img">
            <img className="img-tablet" src={TabletRightImage} alt="" />
        </div>
    </div>

  )
}

export default TabletImages