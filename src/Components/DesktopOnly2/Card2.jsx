import React from 'react'

import QuotesIcon2 from '../../assets/Images/Page 5 images/quotes-icon.svg'
import RatingIcon2 from '../../assets/Images/Page 5 images/rating-5-star.svg'
import AvatarBoyIcon from '../../assets/Images/Page 5 images/avatar-boy.svg'

const Card2 = () => {
  return (
    
    <div class="card">
        <div class="card-icon">
            <img src={QuotesIcon2} alt="" />
        </div>
        <div class="card-rating-icon">
            <img src={RatingIcon2} alt="" />
        </div>
        <div class="card-text">
            <p>Nunc senectus leo vel venenatis accumsan <br></br> vestibulum sollicitudin amet porttitor. Nisl <br></br> bibendum nulla tincidunt eu enim ornare <br></br> dictumst sit amet. Dictum pretium dolor <br></br> tincidunt egestas eget nunc.</p>
        </div>
        <div class="user-container">
            <img src={AvatarBoyIcon} alt="" />
            <div>
                <h3>Albert Flores</h3>
                <p>Developer</p>
            </div>
        </div>
    </div>

  )
}

export default Card2