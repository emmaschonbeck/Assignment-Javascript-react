import React, { useState } from 'react'
import FormGroup from './FormGroup'
import BtnSubmit from './BtnSubmit'
import InformationsBox from './InformationsBox';
import { useNavigate } from 'react-router-dom';

const FillForm = () => {
  
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'choose' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  // Reg ex taget från ChatGPT
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const fullNameRegex = /^[a-zA-Z\s]+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})

    // MEd hjälp av ChatGPT
    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
    } else if (name === 'email' && !emailRegex.test(value)) {
        setErrors(prevErrors => ({...prevErrors, [name]: `Please enter a valid email address`}))
    } else if (name === 'fullName' && !fullNameRegex.test(value)) {
        setErrors(prevErrors => ({...prevErrors, [name]: `Full name can only containe letters and spaces`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  };

  const handleOK = () => {
    console.log('OK button clicked')
    setSubmitted(false);
    navigate('/Contact')
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('form Data', formData)



      const newErrors = {}
      Object.keys(formData).forEach(field => {
        if (formData[field].trim() === '') {
          newErrors[field] = `The ${field} field is required.`
        } else if (field === 'email' && !emailRegex.test(formData[field])) {
          newErrors[field] = `Please enter a valid email address`;
        } else if (field === 'fullName' && !fullNameRegex.test(formData[field])) {
          newErrors[field] = `Full name can only contain letters and spaces`;
        }
      }) 

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return;
      }

      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }) 

      if (res.ok) {
        const data = await res.text()
        console.log(data);
        setSubmitted(true);
        navigate('/info');
      } else {
        const data = await res.json()
        console.log(data);
      }
  };

    if (submitted) {
      return (
        <InformationsBox onClick={handleOK} />
      );
    }

  return (
    
    <section id="fill-form">
        <div className="container">
            <h2>Get Online Consultation</h2>
        
            <form onSubmit={handleSubmit} noValidate className="form" action="#" method="post">
                <FormGroup formData={formData} onChange={handleChange} errors={errors} />
                <BtnSubmit />
            </form>
        </div>
    </section>

  )
}

export default FillForm