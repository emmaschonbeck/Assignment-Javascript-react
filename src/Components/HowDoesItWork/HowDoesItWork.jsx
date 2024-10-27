import React from 'react'
import DesktopImages from './DesktopImages'
import MobileImage from './MobileImage'
import TabletImages from './TabletImages'
import TextUnderCarousel from './TextUnderCarousel'

const HowDoesItWork = () => {
  return (
    

    <section id="how-does-it-work">
        <div class="container">
            <div class="content-3">
                <h2>How Does It Work?</h2>

                <div class="iphone-carousel">
                    <DesktopImages />
                    <MobileImage />
                    <TabletImages />
                </div>
            </div>
            
            <TextUnderCarousel />
        </div>
    </section>


  )
}

export default HowDoesItWork