import React from 'react'

import QuotesIcon1 from '../../assets/Images/Page 5 images/quotes-icon.svg'
import RatingIcon1 from '../../assets/Images/Page 5 images/rating-4-star.svg'
import AvatarGirlIcon from '../../assets/Images/Page 5 images/avatar-girl.svg'

const Card1 = () => {
  return (
    
    <div class="card">
        <div class="card-icon">
            <img src={QuotesIcon1} alt="" />
        </div>
        <div class="card-rating-icon">
            <img src={RatingIcon1} alt="" />
        </div>
        <div class="card-text">
            <p>Sit pretium aliquam tempor, orci dolor sed <br></br> maecenas rutrum sagittis. Laoreet posuere <br></br> rhoncus, egestas lacus, egestas justo <br></br> aliquam vel. Nisi vitae lectus hac hendrerit. <br></br> Montes justo turpis sit amet.</p>
        </div>
        <div class="user-container">
            <img src={AvatarGirlIcon} alt="" />
            <div>
                <h3>Fannie Summers</h3>
                <p>Designer</p>
            </div>
        </div>
    </div>

  )
}

export default Card1