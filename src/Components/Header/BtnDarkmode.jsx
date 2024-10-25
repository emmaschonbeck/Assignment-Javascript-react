import React from 'react'

const BtnDarkmode = () => {
  return (
    <>
        <div>
            <span className="label">Dark mode</span>
        </div>
        <div className="btn-toggle-switch">
            <label className="toggle-switch">
                <input id="darkmode-switch" type="checkbox" />
                <span className="slider round"></span>
            </label> 
        </div>
    </>

  )
}

export default BtnDarkmode