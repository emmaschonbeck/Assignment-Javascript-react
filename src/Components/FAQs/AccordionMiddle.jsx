import React from 'react'

const AccordionMiddle = () => {
  return (
    
    <>
        <div className="accordion middle">
            <input type="radio" name="accordion" id="radio-2" />
            <label className="accordion-title label-middle" for="radio-2">
                <h3>What formats can I download my transaction history in??</h3>
                <div>
                    <span className="arrow-down-icon">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </div>
            </label>
            <div className="accordion-text text-middle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit laudantium quos vitae magni nemo magnam similique exercitationem expedita laborum, corrupti saepe consequuntur asperiores, unde repellat accusantium natus repellendus eius nam? Nostrum quaerat asperiores repudiandae, expedita, consequatur enim soluta animi aliquam, eaque minus fuga sit!</p>
            </div>
        </div>

        <div className="accordion middle">
            <input type="radio" name="accordion" id="radio-3" />
            <label className="accordion-title label-middle" for="radio-3">
                <h3>Can I schedule future transfers?</h3>
                <div>
                    <span className="arrow-down-icon">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </div>
            </label>
            <div className="accordion-text text-middle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit laudantium quos vitae magni nemo magnam similique exercitationem expedita laborum, corrupti saepe consequuntur asperiores, unde repellat accusantium natus repellendus eius nam? Nostrum quaerat asperiores repudiandae, expedita, consequatur enim soluta animi aliquam, eaque minus fuga sit!</p>
            </div>
        </div>

        <div className="accordion middle">
            <input type="radio" name="accordion" id="radio-4" />
            <label className="accordion-title label-middle" for="radio-4">
                <h3>When can I use Banking App services?</h3>
                <div>
                    <span className="arrow-down-icon">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </div>
            </label>
            <div className="accordion-text text-middle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa nostrum totam eum laudantium dolorum consequatur assumenda maxime officiis consectetur suscipit quasi perferendis exercitationem nemo iure, quaerat at recusandae ab, necessitatibus aspernatur reprehenderit dignissimos magnam!</p>
            </div>
        </div>

        <div className="accordion middle">
            <input type="radio" name="accordion" id="radio-5" />
            <label className="accordion-title label-middle" for="radio-5">
                <h3>Can I create my own password that is easy for me to remember?</h3>
                <div>
                    <span className="arrow-down-icon">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </div>
            </label>
            <div className="accordion-text text-middle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae fugiat delectus commodi voluptatibus, fuga maiores consequatur? Consectetur, odio aperiam!</p>
            </div>
        </div>
    </>

  )
}

export default AccordionMiddle