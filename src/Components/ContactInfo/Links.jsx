import React from 'react'
import { NavLink } from 'react-router-dom'

import HouseIcon from '../../assets/Images/Contact-page images/house-icon.svg'
import ArrowsRight from '../../assets/Images/Contact-page images/arrows-right.svg'


const Links = () => {
  return (
    
    <div class="links">
        <div class="homepage-link">
            <img src={HouseIcon} alt="" />
            <NavLink to='/'>Homepage</NavLink>
        </div>
        <div class="contact-links">
            <img src={ArrowsRight} alt="" />
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    </div>

  )
}

export default Links