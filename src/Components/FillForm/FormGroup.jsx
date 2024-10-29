import React from 'react'

const FormGroup = () => {
  return (
    
    <>
        <div class="form-group">
            <label for="full-name">Full name</label>
            <input type="text" id="full-name" name="full-name" placeholder="Please enter your full name" />
        </div>
        
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="Please enter your email address" />
        </div>
        
        <div class="form-group">
            <label for="specialist">Specialist</label>
            <select name="specialist" id="specialist">
                <option value="choose">Choose a specialist</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
                <option value="other">Other</option>
            </select>
        </div>
    </>
  )
}

export default FormGroup