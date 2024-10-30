import React from 'react'
import ContactInfo from './ContactInfo'
import FillForm from '../FillForm/FillForm'

const ContactAndForm = () => {
  return (
    
    <section id='contact-page'>
      <div className='container'>
        <div className='Contact-layout'>
        <ContactInfo />
        <FillForm />
        </div>
      </div>
    </section>

  )
}

export default ContactAndForm