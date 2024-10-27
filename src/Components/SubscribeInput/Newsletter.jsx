import React from 'react'

import BellIcon from '../../assets/Images/Page 6 images/bell-icon.svg'

const Newsletter = () => {
  return (
    
    <div class="newsletter-container">
        <img src={BellIcon} alt="Bell Icon" />
        <h2>Subscribe to our <br></br> newsletter</h2>
        <h2 class="desktop-only-text">Subscribe to our newsletter to stay <br></br> informed about latest updates</h2>
    </div>

  )
}

export default Newsletter