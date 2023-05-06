import React from 'react'

const DTI = () => {
  return (
    <div className='mx-16 grid grid-cols-1 md:px-10'>
        <div className='text-center font-semibold'>A. Monthly Income</div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between'>
            <div className=''>Monthly Gross Income</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between'>
            <div className=''>Other Monthly Income</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between font-semibold'>
            <div className=''>Total Monthly Income</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='text-center font-semibold'>
          B. Fixed Monthly Debt
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between'>
            <div className=''>Monthly Mortgage or Rent</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between'>
            <div className=''>Monthly Other Payments</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between'>
            <div className=''>Requested Loan Amount÷Loan Month/s</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex justify-between font-semibold'>
            <div className=''>Total Recurring Monthly Debt</div>
            <div className=''>0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex flex-col'>
            <hr className='border-black' />
            <div className='flex justify-between font-semibold'>
              <div className='text-start '>
                Debt to Income Ratio(B÷A) 
              </div>
              <div className=''>
                0.00
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DTI
