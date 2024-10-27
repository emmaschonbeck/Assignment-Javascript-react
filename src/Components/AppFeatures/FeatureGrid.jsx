import React from 'react'

import CreditCardIcon from '../../assets/Images/Page 2 images/credit-card.svg'
import ShieldIcon from '../../assets/Images/Page 2 images/shield.svg'
import BarsGraphicIcon from '../../assets/Images/Page 2 images/bars-graphic.svg'
import CommunicationIcon from '../../assets/Images/Page 2 images/communication.svg'
import WalletIcon from '../../assets/Images/Page 2 images/wallet.svg'
import HappyEmojiIcon from '../../assets/Images/Page 2 images/happy.svg'

const FeatureGrid = () => {
  return (
    
    <div class="feature-grid">
        <div class="icon-container">
            <div class="icons-img">
                <img src={CreditCardIcon} alt="credit card icon" />
            </div>
            <div class="text-sm">
                <h3>Easy Payments</h3><br></br>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
        </div>
        <div class="icon-container">
            <div class="icons-img">
                <img src={ShieldIcon} alt="shield icon" />
            </div>
            <div class="text-sm">
                <h3>Data Security</h3><br></br>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan <br></br> vestibulum non.</p>
            </div>
        </div>
        <div class="icon-container">
            <div class="icons-img">
                <img src={BarsGraphicIcon} alt="statistics icon" />
            </div>
            <div class="text-sm">
                <h3>Cost Statistics</h3><br></br>
                <p>Mattis urna ultricies non amet, <br></br> purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
        </div>
        <div class="icon-container">
            <div class="icons-img">
                <img src={CommunicationIcon} alt="chat bubble icon" />
            </div>
            <div class="text-sm">
                <h3>Support 24/7</h3><br></br>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean <br></br> quam mauris.</p>
            </div>
        </div>
        <div class="icon-container">
            <div class="icons-img">
                <img src={WalletIcon} alt="wallet icon" />
            </div>
            <div class="text-sm">
                <h3>Regular Cashback</h3><br></br>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
        </div>
        <div class="icon-container">
            <div class="icons-img">
                <img src={HappyEmojiIcon} alt="happy emoji icon" />
            </div>
            <div class="text-sm">
                <h3>Top Standards</h3><br></br>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
        </div>
    </div>

  )
}

export default FeatureGrid