import React, { useState } from 'react'

function FaqApi() {

    const [FaqApi, setFaqAPI] = useState([
        {
            id: 1,
            question: "Is any of my personal information stored in the App?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque similique ipsam eaque distinctio dolores quos aperiam cum, hic eligendi impedit quasi praesentium doloribus minus repellat. Dolore in repellat maiores."
        },
        {
            id: 2,
            question: "What formats can I download my transaction history in??",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit laudantium quos vitae magni nemo magnam similique exercitationem expedita laborum, corrupti saepe consequuntur asperiores, unde repellat accusantium natus repellendus eius nam? Nostrum quaerat asperiores repudiandae, expedita, consequatur enim soluta animi aliquam, eaque minus fuga sit!"
        },
        {
            id: 3,
            question: "Can I schedule future transfers?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit laudantium quos vitae magni nemo magnam similique exercitationem expedita laborum, corrupti saepe consequuntur asperiores, unde repellat accusantium natus repellendus eius nam? Nostrum quaerat asperiores repudiandae, expedita, consequatur enim soluta animi aliquam, eaque minus fuga sit!"
        },
        {
            id: 4,
            question: "When can I use Banking App services?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa nostrum totam eum laudantium dolorum consequatur assumenda maxime officiis consectetur suscipit quasi perferendis exercitationem nemo iure, quaerat at recusandae ab, necessitatibus aspernatur reprehenderit dignissimos magnam!"
        },
        {
            id: 5,
            question: "Can I create my own password that is easy for me to remember?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae fugiat delectus commodi voluptatibus, fuga maiores consequatur? Consectetur, odio aperiam!"
        },
        {
            id: 6,
            question: "What happens if I forget or lose my password?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi enim, commodi maiores reprehenderit unde excepturi."
        },
    ])
    
    
        
        return (
        <div className='FaqApi'>
            <div className='Faq-List'>
                
                {FaqApi.map(item => (
                    <div key={item.id} className='faq-item'>
                        <h3 className='faq-question'>{item.question}</h3>
                        <p className='faq-answer'>{item.answer}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FaqApi