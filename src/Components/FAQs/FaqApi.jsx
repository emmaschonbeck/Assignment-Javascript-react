import React, { useState, useEffect } from 'react'
import FaqApiItem from './FaqApiItem'

const FaqApi = () => {

    const [faqItems, setFaqItems] = useState([])
    const [openIndex, setOpenIndex] = useState(null);
    
        useEffect(() => {
            const fetchFaqApi = async () => {
                try {
                    const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
                    const data = await response.json();
                    console.log('fetched FAQ data', data)
                    setFaqItems(data);
                } catch (error) {
                    console.log('Error fetching FaqApi:', error);
                }
            }

            fetchFaqApi();

        }, []);

        const toggleFaq = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
        
        return (
            <div className='FaqApi'>
                <div className='Faq-List'>
                    {Array.isArray(faqItems) && faqItems.length > 0 ? (
                        faqItems.map((item, index) => (
                            <FaqApiItem key={item.id} item={item} isOpen={openIndex === index} onToggle={() => toggleFaq(index)} />
                        ))
                    ) : (
                        <p>No FAQs available</p>
                    )}
                </div>
            </div>
        )
}

export default FaqApi