import React from 'react'

const FaqApiItem = ({ item }) => {
  return (
    <div className='faq-item'>
        <div className='faq-content'>
            <h3 className='faq-title'>{item.title}</h3>
            <p className='faq-content'>{item.content}</p>
        </div>
        <span className="arrow-down-icon">
            <i className="fa-solid fa-chevron-up"></i>
        </span>
    </div>
  )
}

export default FaqApiItem