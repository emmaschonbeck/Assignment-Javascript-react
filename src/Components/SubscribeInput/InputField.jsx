import React, { useState } from 'react'

import EnvelopeIcon from '../../assets/Images/Page 6 images/envelope-icon.svg'
import InformationsBox from '../FillForm/InformationsBox';
import { useNavigate } from 'react-router-dom';

const InputField = () => {

  const [subscribeData, setSubscribeData] = useState({ email: '' });
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Reg ex är taget från ChatGPT
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubscribeData({...subscribeData, [name]: value});

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
    } else if (name === 'email' && !emailRegex.test(value)) {
      setErrors((prevErrors) => ({...prevErrors, [name]: `Please enter a valid email address`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ``}))
    }
  }


  const handleOK = () => {
    setSubmitted(false);
    navigate('/');
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


    const newErrors = {}
    Object.keys(subscribeData).forEach(field => {
      if (subscribeData[field].trim() === '') {
        newErrors[field] = `The ${field} is required.`
      } else if (field === 'email' && !emailRegex.test(subscribeData[field])) {
        newErrors[field] = `Please enter a valid email address`;
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return;
    }


    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscribeData)
    })

    if (res.ok) {
      setSubmitted(true);
      setSubscribeData({ email: '' });
      navigate('/info');
    }
  }

  if (submitted) {
    return (
      <InformationsBox />
    )
  }


  return (
    
    <form onSubmit={handleSubmit} noValidate>
      <div className="input-container">
        <div className="envelope-icon">
            <img src={EnvelopeIcon} alt="Envelope Icon" />
        </div>
        <div className='email-input'>
          <input className="form-input email" name='email' value={subscribeData.email} onChange={handleChange} type="email" required placeholder="Your Email"/>
          <span className='error-message2'>{errors.email && errors.email}</span>
        </div>

          <button className="btn-subscribe">Subscribe</button>
      </div>
    </form>

  )
}

export default InputField