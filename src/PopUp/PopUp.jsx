import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const PopUp =({ heading, buttonText, inputs, open, onClose}) => {

  return (
    <div>
    {open && (
     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <div className='flex justify-end items-center'>
        <RxCross2
           className="text-2xl cursor-pointer"
           onClick={onClose}
         />
        </div>
       <div className="flex justify-between items-center mb-4">
         <h2 className="text-2xl font-semibold text-[#673ab7]">{heading}</h2>
         <div>
           <img src="./login.png" alt="Logo" className="h-6 w-24 inline-block ml-2" />
         </div>
        
       </div>
       <div>
       <div className={`grid gap-4 ${inputs.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {inputs.map((input, index) => (
                <div key={index} className="mb-4">
                  <label htmlFor={`input-${index}`} className="block text-sm font-semibold mb-2">
                    {input.label}
                  </label>
                  {input.type === 'dropdown' ? (
                    <select
                      id={`input-${index}`}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      {input.options.map((option, idx) => (
                        <option key={idx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={input.type}
                      id={`input-${index}`}
                      placeholder={input.placeholder}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  )}
                </div>
              ))}
            </div>
         <button
           onClick={onClose}
           className="w-full bg-[#673ab7] text-white py-2 rounded text-center"
         >
           {buttonText}
         </button>
       </div>
     </div>
   </div>
    )}
  </div>
  )
}

export default PopUp