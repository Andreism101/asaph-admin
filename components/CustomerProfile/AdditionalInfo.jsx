import React from 'react'

const AdditionalInfo = ({additional}) => {
  return (
    <div>
            <p className='underline ml-16 text-sm font-semibold'>HTH/House & Business Visit(HBV) Indicators</p>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Poverty Level</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.PovertyLevel} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Housing</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Housing}   disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Family Member with PWD?</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.PwdMember}  disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Hiring Workers</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.HiringWorkers} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Family member working abroad</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.WorkingAbroad}  disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>IP Group</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.IP} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>4P’s Beneficiary</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.ipg}  disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>MCCT Beneficiary</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Mcct}  disabled
                />
              </div>
            </div>
            <p className='underline ml-16 text-sm font-semibold'>PPI Scorecard (National Poverty Line)</p>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>No. of Family Members</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.NumberMember} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Highest Grade</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.HighestEducation} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>House Condition(Roof)</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Roof}  disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>House Condition(Outer Walls)</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Walls}  disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Electricity</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Electricity} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Water Supply</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Water} disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Has own a Refrigerator</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Refrigerator} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>TV</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.tv} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Washing Machine</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.WashingMachine} disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Toilet Condition</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value={additional.Toilet}  disabled
                />
              </div>
            </div>
          </div>
  )
}

export default AdditionalInfo
