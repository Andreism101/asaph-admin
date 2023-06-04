import React from 'react'

const Employment = ({employment}) => {
  // const { employmentData } = props;
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
                  value={employment.EmploymentStatus} disabled
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
                  value={employment.EmployersName} disabled
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
                  value={employment.EmployersContact} disabled
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
                  value={employment.EmployersYearStay}  disabled
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
                  value={employment.MonthlyEarnings} disabled
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
                  value={employment.EmployersAddress} disabled
                />
              </div>
            </div>
          </div>
  )
}

export default Employment
