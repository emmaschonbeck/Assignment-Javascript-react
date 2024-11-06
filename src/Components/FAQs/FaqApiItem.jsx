import React from 'react'

const FaqApiItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onToggle}>
        <div className='faq-content'>
            <h3 className='faq-title' onClick={onToggle}>{item.title}</h3>
            {isOpen && (
              <p className='faq-content-text'>{item.content}</p>
            )}
        </div>
        <span className="arrow-down-icon">
          <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </span>
    </div>
  )
}

export default FaqApiItem