import React from "react"

const FormGroup = ({ formData, onChange, errors }) => {

    //MEd hjälp av ChatGPT

    const handleSpecialistChange = (e) => {
        const { value } = e.target;
        if (value !== "choose") {
            onChange(e);
        }
    };

    //Slut med ChatGPT


  return (
    
    <>
        <div className="form-group">
            <label htmlFor="full-name">Full name</label>
            <input type="text" id="full-name" name="fullName" value={formData.fullName} required placeholder="Please enter your full name" onChange={onChange} />
            <span className="error-message">{errors.fullName && errors.fullName}</span>
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" value={formData.email} required placeholder="Please enter your email address" onChange={onChange} />
            <span className="error-message">{errors.email && errors.email}</span>
        </div>
        
        <div className="form-group">
            <label htmlFor="specialist">Specialist</label>
            <select name="specialist" id="specialist" value={formData.specialist} onChange={handleSpecialistChange}>
                <option value="choose" disabled>Choose a specialist</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
                <option value="other">Other</option>
            </select>
            <span className="error-message">{errors.specialist && errors.specialist}</span>
        </div>
    </>
  )
}

export default FormGroup