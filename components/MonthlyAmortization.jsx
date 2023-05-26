import React from 'react'

const MonthlyAmortization = () => {
  return (
    <div className='mx-16 grid grid-cols-1 md:px-10'>
        <div className='text-center font-semibold m-3'>Monthly Amortization</div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Interest Rate</div>
            <div className='text-right'>6%</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Loan Term</div>
            <div className='text-right'>3 Years</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>First Due (Month)</div>
            <div className='text-right'>May 2023</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Maturity Date</div>
            <div className='text-right'>May 30, 2025</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 '>
          <div></div>
          <div className='block md:flex justify-between font-semibold'>
            <hr className='border-black' />
            <div className=''>Gross Loan</div>
            <div className='text-right'>&#8369;0.00</div>
          </div>
        </div>
        <div className='text-center font-semibold'>
          LESS
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Deductions</div>
            <div className='text-right'>&#8369;0.00</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex flex-col'>
            <hr className='border-black' />
            <div className='flex justify-between font-semibold'>
              <div className='text-start '>
                Net Loan
              </div>
              <div className='text-right'>
                &#8369;0.00
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MonthlyAmortization
