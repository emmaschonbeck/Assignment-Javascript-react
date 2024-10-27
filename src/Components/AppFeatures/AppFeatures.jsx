import React from 'react'
import FeatureGrid from './FeatureGrid'
import IphoneTilted from './IphoneTilted'


const AppFeatures = () => {
  return (
    <section id="app-features">
        <div class="container">
            
            <IphoneTilted />

            <div class="content-2">
                <h2 class="h2-text">App Features</h2>
                <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            
                <FeatureGrid />
            </div>
        </div>
     </section>
  )
}

export default AppFeatures