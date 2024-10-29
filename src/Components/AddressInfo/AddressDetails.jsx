import React from 'react'

import AddressIcon from '../../assets/Images/Contact-page images/address-icon.svg'
import PhoneIcon from '../../assets/Images/Contact-page images/phone-icon.svg'
import ClockIcon from '../../assets/Images/Contact-page images/clock-icon.svg'

const AddressDetails = () => {
  return (
    
    <>
    
        <div class="info-1">
            <h3>Medical Center 1</h3>

            <div class="address-detail">
                <img src={AddressIcon} alt="" />
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div class="address-detail">
                <img src={PhoneIcon} alt="" />
                <p>(406) 555-0120</p>
            </div>
            <div class="address-detail">
                <img src={ClockIcon} alt="" />
                <p><span>Mon – Fri:</span> 9:00 am – 22:00 am <br></br> <span>Sat – Sun:</span> 9:00 am – 20:00 am</p>
            </div>
        </div>

        <div class="info-1">
            <h3>Medical Center 2</h3>
                    
            <div class="address-detail">
                <img src={AddressIcon} alt="" />
                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
            </div>
            <div class="address-detail">
                <img src={PhoneIcon} alt="" />
                <p>(406) 544-0123</p>
            </div>
            <div class="address-detail">
                <img src={ClockIcon} alt="" />
                <p><span>Mon – Fri:</span>9:00 am – 22:00 am <br></br> <span>Sat – Sun:</span> 9:00 am – 20:00 am</p>
            </div>
        </div>

    </>

  )
}

export default AddressDetails