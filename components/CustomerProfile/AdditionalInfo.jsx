import React from 'react'

const AdditionalInfo = () => {
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
                  value="Moderate Poor" disabled
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
                  value="Owned" disabled
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
                  value="Yes, Sibling" disabled
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
                  value="No" disabled
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
                  value="No" disabled
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
                  value="N/A" disabled
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
                  value="No" disabled
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
                  value="No" disabled
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
                  value="4 and below" disabled
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
                  value="Completed Highschool" disabled
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
                  value="Mixed but predominantly strong" disabled
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
                  value="Mixed but predominantly strong" disabled
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
                  value="Grid" disabled
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
                  value="Own use, faucet" disabled
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
                  value="Yes" disabled
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
                  value="Yes" disabled
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
                  value="Yes" disabled
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
                  value="Unimproved toilet" disabled
                />
              </div>
            </div>
          </div>
  )
}

export default AdditionalInfo
