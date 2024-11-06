import React from 'react'
import MapImg from './MapImg'
import AddressDetails from './AddressDetails'
import SocialMediaIcons from './SocialMediaIcons'

const AddressInfo = () => {
  return (
    

    <section id="address-page">
        <div className="container">
            <MapImg />
            
            <div className="address-info">
                <AddressDetails />
                <SocialMediaIcons />
            </div>
        </div>
    </section>


  )
}

export default AddressInfo