import React from 'react'

import LowerBigImage from '../../assets/Images/Page 4 images/lower-image-bg.svg'
import LowerSmallImage from '../../assets/Images/Page 4 images/lower-image-sm.svg'

const ImageLower = () => {
  return (
    
    <div class="image-lower-container">
        <img class="img-bg2" src={LowerBigImage} alt="" />
        <img class="img-sm2" src={LowerSmallImage} alt="" />
    </div>

  )
}

export default ImageLower