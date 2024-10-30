import React from 'react'
import Links from './Links'
import ContactDetails from './ContactDetails'
import FillForm from '../FillForm/FillForm'

const ContactInfo = () => {
  return (

    <>
        <section id="contact-page">
            <div class="container">
                <Links />
                <ContactDetails />
            </div>
        </section>
    </>

  )
}

export default ContactInfo