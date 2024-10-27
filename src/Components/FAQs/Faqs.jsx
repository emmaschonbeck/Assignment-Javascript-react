import React from 'react'
import FaqText from './FaqText'
import ContactBox from './ContactBox'
import AccordionUpper from './AccordionUpper'
import AccordionMiddle from './AccordionMiddle'
import AccordionLower from './AccordionLower'
import BtnContact from './BtnContact'

const Faqs = () => {
  return (
    
    <section id="FAQs">
        <div class="container">
            <FaqText />
            <ContactBox />

            <div class="empty"></div>

            <div class="accordion-container">
                <AccordionUpper />
                <AccordionMiddle />
                <AccordionLower />
            </div>

            <BtnContact />
        </div>
    </section>

  )
}

export default Faqs