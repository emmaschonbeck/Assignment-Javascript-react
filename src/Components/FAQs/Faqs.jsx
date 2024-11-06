import React from 'react'
import FaqText from './FaqText'
import ContactBox from './ContactBox'
import BtnContact from './BtnContact'
import FaqApi from './FaqApi'

const Faqs = () => {
  return (
    
    <section id="FAQs">
        <div className="container">
            <FaqText />
            <ContactBox />

            <div className="empty"></div>

            <div className="accordion-container">
              <FaqApi />
            </div>

            <BtnContact />
        </div>
    </section>

  )
}

export default Faqs