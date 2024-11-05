import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

const DesktopOnly2 = () => {
  return (
    
    <section id="desktop-only-2">
        <div class="container">
            <h2>Clients are <br></br> Loving Our App</h2>

            <div class="card-container">
                {/* <Testimonials /> */}
                <Card1 />
                <Card2 />
            </div>
        </div>
    </section>

  )
}

export default DesktopOnly2