import React from 'react'

const AccordionLower = () => {
  return (
    
    <div className="accordion lower">
        <input type="radio" name="accordion" id="radio-6" />
        <label className="accordion-title label-lower" for="radio-6">
            <h3>What happens if I forget or lose my password?</h3>
            <div>
                <span className="arrow-down-icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </span>
            </div>
        </label>
        <div className="accordion-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi enim, commodi maiores reprehenderit unde excepturi.</p>
        </div>
    </div>

  )
}

export default AccordionLower