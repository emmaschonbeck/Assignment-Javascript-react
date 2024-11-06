import React from 'react'

import CheckmarkIcon from '../../assets/Images/Page 4 images/check-image-icon.svg'
import BtnArrowIcon from '../../assets/Images/Page 4 images/arrow-icon.svg'

const Content4 = () => {
  return (
    
    <div className="content-4">
        <h2>Make your money <br></br> transfer simple and clear</h2>

        <ul className="text-list-container">
            <li><img src={CheckmarkIcon} alt="" /><span>Banking transactions are free for you</span></li>
            <li><img src={CheckmarkIcon} alt="" /><span>No monthly cash commission</span></li>
            <li><img src={CheckmarkIcon} alt="" /><span>Manage payments and transactions online</span></li>
        </ul>
        <button className="btn-learn-more-1">Learn more <img src={BtnArrowIcon} alt="arrow right icon" /></button>
    </div>

  )
}

export default Content4