import React from 'react'

import EnvelopeIcon from '../../assets/Images/Page 6 images/envelope-icon.svg'

const InputField = () => {
  return (
    
    <div class="input-container">
        <div class="envelope-icon">
            <img src={EnvelopeIcon} alt="Envelope Icon" />
        </div>
        <input class="form-input email" type="email" placeholder="Your Email" />
        <button class="btn-subscribe">Subscribe</button>
    </div>

  )
}

export default InputField