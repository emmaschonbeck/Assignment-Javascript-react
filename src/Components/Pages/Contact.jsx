import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import AddressInfo from '../AddressInfo/AddressInfo'
import FillForm from '../FillForm/FillForm'

const Contact = () => {
  return (
    <>
        <ContactInfo />
        <FillForm />
        <AddressInfo />
    </>
  )
}

export default Contact