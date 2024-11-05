import React, { useState } from 'react'
import FormGroup from './FormGroup'
import BtnSubmit from './BtnSubmit'
import InformationsBox from './InformationsBox';
import { useNavigate } from 'react-router-dom';

const FillForm = () => {
  
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
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