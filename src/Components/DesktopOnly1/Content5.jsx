import React from 'react'

import CreditCardIcon2 from '../../assets/Images/Page 4 images/credit-card-icon.svg'
import WalletIcon2 from '../../assets/Images/Page 4 images/wallet-icon.svg'
import BtnArrowIcon from '../../assets/Images/Page 4 images/arrow-icon.svg'

const Content5 = () => {
  return (
    
    <div class="content-5">
        <h2>Receive payment from <br></br> international bank details</h2>

        <div class="payment-container">
            <div class="payment-icon-container">
                <div class="img-container">
                    <img src={CreditCardIcon2} alt="credit card icon" />
                </div>
                <div>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
            </div>
            <div class="payment-icon-container">
                <div class="img-container">
                    <img src={WalletIcon2} alt="wallet icon" />
                </div>
                <div>
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
            </div>
        </div>

        <button class="btn-learn-more-2">Learn more <img src={BtnArrowIcon} alt="arrow right icon" /></button>

    </div>

  )
}

export default Content5