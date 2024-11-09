import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import TestimonialsApi from './TestimonialsApi'

const DesktopOnly2 = () => {
  return (
    
    <section id="desktop-only-2">
        <div className="container">
            <h2>Clients are <br></br> Loving Our App</h2>

            <div className="card-container">
                <TestimonialsApi />
                {/* <Card1 />
                <Card2 /> */}
            </div>
        </div>
    </section>

  )
}

export default DesktopOnly2