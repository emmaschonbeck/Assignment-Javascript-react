import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import AddressInfo from '../AddressInfo/AddressInfo'
import FillForm from '../FillForm/FillForm'
import ContactAndForm from '../ContactInfo/ContactAndForm'

const Contact = () => {
  return (
    <>
        <ContactAndForm />
        <AddressInfo />
    </>
  )
}

export default Contact