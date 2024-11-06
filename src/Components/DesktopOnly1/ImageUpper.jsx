import React from 'react'

import UpperBigImage from '../../assets/Images/Page 4 images/upper-bg-image.svg'
import UpperSmallImage from '../../assets/Images/Page 4 images/upper-sm-image.svg'

const ImageUpper = () => {
  return (
    
    <div className="image-upper-container">
        <img className="img-bg" src={UpperBigImage} alt="" />
        <img className="img-sm" src={UpperSmallImage} alt="" />
    </div>

  )
}

export default ImageUpper