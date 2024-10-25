import React from 'react'

import PhoneBack from '../../assets/Images/Page 1 images/iPhone.back.svg'
import PhoneFront from '../../assets/Images/Page 1 images/iPhone.front.svg'

const HeroPhoneImg = () => {
  return (
    
    <div class="images">
        <img class="phone-back" src={PhoneBack} alt="iphone my budget" />
        <img class="phone-front" src={PhoneFront} alt="iphone your cards" />
    </div>
  )
}

export default HeroPhoneImg