import React from 'react'
import { MdCheck, MdClose } from "react-icons/md";

const Identification = () => {
  return (
    <div>
            <div className='grid md:grid-cols-5  font-normal md:ml-14 mx-3'>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Primary ID</label>
                  <label className='block text-sm font-medium'>View</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="primaryID.jpg" disabled
                />
                <div className='flex justify-between px-5 gap-4'>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                    <MdCheck size={20} />
                  </button>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                    <MdClose size={20} />
                  </button>
                </div>
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Secondary ID</label>
                  <label className='block text-sm font-medium'>View</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="secondaryID.jpg" disabled
                />
                <div className='flex justify-between px-5 gap-4'>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                    <MdCheck size={20} />
                  </button>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                    <MdClose size={20} />
                  </button>
                </div>
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Payslip</label>
                  <label className='block text-sm font-medium'>View</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="payslip.png" disabled
                />
                <div className='flex justify-between px-5 gap-4'>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                    <MdCheck size={20} />
                  </button>
                  <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                    <MdClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Identification
