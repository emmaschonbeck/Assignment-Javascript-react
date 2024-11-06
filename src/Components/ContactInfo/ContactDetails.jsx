import React from 'react'

import EnvelopeIcon from '../../assets/Images/Contact-page images/envelope-icon.svg'
import UsersIcon from '../../assets/Images/Contact-page images/users-icon.svg'

const ContactDetails = () => {
  return (
    
    <div className="contact-info-container">
        <h2>Contact us</h2>

        <div className="contact-section">
            <div className="contact-info">
                <div className="contact-icon">
                    <img src={EnvelopeIcon} alt="" />
                </div>
                <div className="contact-details">
                    <h4>Email us</h4>
                    <p>Please feel free to drop us a line. We will <br></br> respond as soon as possible.</p>
                    <div className="message-link">
                        <a href="#">Leave a message</a>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>


            <div className="contact-info">
                <div className="contact-icon">
                    <img src={UsersIcon} alt="" />
                </div>
                <div className="contact-details">
                    <h4>Careers</h4>
                    <p>Sit ac ipsum leo lorem magna nunc mattis <br></br> maecenas non vestibulum.</p>
                    <div className="message-link">
                        <a href="#">Send an application</a>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ContactDetails