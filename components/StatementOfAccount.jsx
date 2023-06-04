import React from 'react'

const StatementOfAccount = () => {
  return (
    <div className='mx-16 grid grid-cols-1 md:px-10'>
        <div className='text-center font-semibold m-3'>Current Due</div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Principal</div>
            <div className='text-right'>&#8369;0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Interest Rate</div>
            <div className='text-right'>6%</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 '>
          <div></div>
          <div className='block md:flex justify-between font-semibold'>
            <hr className='border-black' />
            <div className=''>Total Amount Due</div>
            <div className='text-right'>&#8369;0.00</div>
          </div>
        </div>
    </div>
  )
}

export default StatementOfAccount
