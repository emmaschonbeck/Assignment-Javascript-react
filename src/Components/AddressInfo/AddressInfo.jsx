import React from 'react'
import MapImg from './MapImg'
import AddressDetails from './AddressDetails'
import SocialMediaIcons from './SocialMediaIcons'

const AddressInfo = () => {
  return (
    

    <section id="address-page">
        <div class="container">
            <MapImg />
            
            <div class="address-info">
                <AddressDetails />
                <SocialMediaIcons />
            </div>
        </div>
    </section>


  )
}

export default AddressInfo