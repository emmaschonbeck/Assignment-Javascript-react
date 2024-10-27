import React from 'react'

import UpperBigImage from '../../assets/Images/Page 4 images/upper-bg-image.svg'
import UpperSmallImage from '../../assets/Images/Page 4 images/upper-sm-image.svg'

const ImageUpper = () => {
  return (
    
    <div class="image-upper-container">
        <img class="img-bg" src={UpperBigImage} alt="" />
        <img class="img-sm" src={UpperSmallImage} alt="" />
    </div>

  )
}

export default ImageUpper