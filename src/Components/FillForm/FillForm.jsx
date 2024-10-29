import React from 'react'
import FormGroup from './FormGroup'
import BtnSubmit from './BtnSubmit'

const FillForm = () => {
  return (
    
    <section id="fill-form">
        <div class="container">
            <h2>Get Online Consultation</h2>
        
            <form class="form" action="#" method="post">
                <FormGroup />
                <BtnSubmit />
            </form>
        </div>
    </section>

  )
}

export default FillForm