import React from 'react'

const InformationsBox = ({ onClick }) => {
  return (
    <section id='informationbox-container'>
        <div className='informationsbox'>
            <h1>Thank you!</h1>
            <p>Thank you for submitting your information. We will contact you as soon as possible!</p>
            <button className='btn-infobox' onClick={() => window.history.back()}>OK</button>
        </div>
    </section>
  )
}

export default InformationsBox