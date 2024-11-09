import React, { useState, useEffect } from 'react'
import QuoteIcon from '../../assets/Images/Page 5 images/quotes-icon.svg'
import FilledStar from '../../assets/Images/Page 5 images/FilledStar.svg'
import OutlineStar from '../../assets/Images/Page 5 images/OutlineStar.svg'

const TestimonialsApi = () => {
  
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = async () => {
    try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const results = await response.json();
        setTestimonials(results);
    } catch (error) {
        console.log("Error when fetching testimonials")
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);


  //Med hjälp av ChatGPT
  const displayStarsRating = (rating) => {
    return [...Array(5)].map((_, idx) => (
        <img key={idx} src={idx < rating ? FilledStar : OutlineStar} alt='Star ratings' className='star-rating'/>
    ));
  };
  //Slut med ChatGPT

  
    return (
    <>
        {testimonials.map((item) => (
            <div className='card'>

                <div className='card-icon'>
                    <img src={QuoteIcon} alt="Quote Icon" />
                </div>
                <div className='card-rating-icon'>
                    {displayStarsRating(item.starRating)}
                </div>
                <div className='card-text'>
                    <p>{item.comment}</p>
                </div>
                <div className='user-container'>
                    <img src={item.avatarUrl} alt="Author Avatar" />
                    <div>
                        <h3>{item.author}</h3>
                        <p>{item.jobRole}</p>
                    </div>
                </div>

            </div>
        ))}
    
    </>
  )
}

export default TestimonialsApi