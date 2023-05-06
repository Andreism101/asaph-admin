import LoanHistory from '@/components/LoanHistory'
import PersonalInfo from '@/components/PersonalInfo'
import ProfileTabs from '@/components/ProfileTabs'
import { MdChevronRight, MdExpandMore } from "react-icons/md";
import {useState} from 'react'

import React from 'react'

const BorrowHistory = () => {

  const [showBorrowerLoanDetailsNav, setShowBorrowerLoanDetailsNav] = useState(true)

  const BorrowerLoanDetailsNav =() =>{
    setShowBorrowerLoanDetailsNav(!showBorrowerLoanDetailsNav);
  }

  return (
    <div>
      <PersonalInfo/>
        <div className='mx-5'>
          <ProfileTabs/>
        </div>
        <LoanHistory/>
        <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
          <div onClick={BorrowerLoanDetailsNav} className='cursor-pointer'>
            {showBorrowerLoanDetailsNav ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
          </div>
          <p className='align-middle'>Borrower Loan Details</p>
        </div>
        {showBorrowerLoanDetailsNav && 
          <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Application Date</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="5/4/23" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Encoding Date</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="5/4/23" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Loan Amount</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="4" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Loan Month/s</label>
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
                  <label className='block text-sm font-medium'>Weekly Amortization</label>
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
        }
    </div>
  )
}

export default BorrowHistory
