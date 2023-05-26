import React from 'react'

const Employment = () => {
  return (
    <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employee Status</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Employed" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employer’s Name</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Bolsia, Nadia" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employer’s Contact Number</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="09654183275" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Year/s of Employement</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="4" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Salary Range</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="35,000 - 40,000" disabled
                />
              </div>
              <div className='mx-3 col-span-2'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Work Address</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="B1 L2 Test St. Test, Test City" disabled
                />
              </div>
            </div>
          </div>
  )
}

export default Employment
