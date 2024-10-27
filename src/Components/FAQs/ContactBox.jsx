import React from 'react'

import PhoneIcon from '../../assets/Images/Page 6 images/phone-icon.svg'
import ArrowPhoneIcon from '../../assets/Images/Page 6 images/arrow-phone.svg'
import MessageIcon from '../../assets/Images/Page 6 images/message-icon.svg'
import ArrowMessageIcon from '../../assets/Images/Page 6 images/arrow-message.svg'

const ContactBox = () => {
  return (
    
    <div class="contact-container">
        <div class="contact-us">
            <img src={PhoneIcon} alt="" />
            <p>Still have  questions?</p>
            <a class="contact-phone" href="#">Contact us <img src={ArrowPhoneIcon} alt="" /></a>
        </div>
        <div class="contact-us">
            <img src={MessageIcon} alt="" />
            <p>Don't like phone calls?</p>
            <a href="#">Contact us <img src={ArrowMessageIcon} alt="" /></a>
        </div>
    </div>

  )
}

export default ContactBox