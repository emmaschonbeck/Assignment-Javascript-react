import React from 'react'

import PhoneBack from '../../assets/Images/Page 1 images/iPhone.back.svg'
import PhoneFront from '../../assets/Images/Page 1 images/iPhone.front.svg'

const HeroPhoneImg = () => {
  return (
    
    <div className="images">
        <img className="phone-back" src={PhoneBack} alt="iphone my budget" />
        <img className="phone-front" src={PhoneFront} alt="iphone your cards" />
    </div>
  )
}

export default HeroPhoneImg