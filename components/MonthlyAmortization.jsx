import React from 'react'

const MonthlyAmortization = ({monthly}) => {
  return (
    <div className='mx-16 grid grid-cols-1 md:px-10'>
        <div className='text-center font-semibold m-3'>Monthly Amortization</div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Interest Rate</div>
            <div className='text-right'>15%</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Loan Term</div>
            <div className='text-right'>6 Months</div>
          </div>
        </div>
        {/* <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>First Due (Month)</div>
            <div className='text-right'>{monthly.EmploymentStatus}</div>
          </div>
        </div> */}
        {/* <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Maturity Date</div>
            <div className='text-right'>{monthly.EmploymentStatus}</div>
          </div>
        </div> */}
        {/* <div className='grid md:grid-cols-2 '>
          <div></div>
          <div className='block md:flex justify-between font-semibold'>
            <hr className='border-black' />
            <div className=''>{monthly.EmploymentStatus}</div>
            <div className='text-right'>&#8369;0.00</div>
          </div>
        </div> */}
        <div className='text-center font-semibold'>
          LESS
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='block md:flex justify-between'>
            <div className=''>Deductions</div>
            <div className='text-right'>12% First 3 weeks</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div></div>
          <div className='flex flex-col'>
            <hr className='border-black' />
            <div className='flex justify-between font-semibold'>
              <div className='text-start '>
                Net Amount
              </div>
              <div className='text-right'>
                &#8369;{monthly.LoanValue}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MonthlyAmortization
