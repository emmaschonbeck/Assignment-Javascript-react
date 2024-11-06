import React from 'react'

const AccordionUpper = () => {
  return (
    
    <div className="accordion upper">
        <input type="radio" name="accordion" id="radio-1" />
        <label className="accordion-title label-upper" for="radio-1">
            <h3>Is any of my personal information stored in the App?</h3>
            <div>
                <span className="arrow-down-icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </span>
            </div>
        </label>
        <div className="accordion-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque similique ipsam eaque distinctio dolores quos aperiam cum, hic eligendi impedit quasi praesentium doloribus minus repellat. Dolore in repellat maiores.</p>
        </div>
    </div>

  )
}

export default AccordionUpper