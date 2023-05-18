import LoanHistory from '@/components/LoanHistory'
import PersonalInfo from '@/components/PersonalInfo'
import ProfileTabs from '@/components/ProfileTabs'
import { MdChevronRight, MdExpandMore } from "react-icons/md";
import {useState} from 'react'

import React from 'react'
import BorrowerLoanDetails from '@/components/BorrowerLoanDetails';

const BorrowHistory = () => {

  const [showBorrowerLoanDetailsNav, setShowBorrowerLoanDetailsNav] = useState(true)

  const BorrowerLoanDetailsNav =() =>{
    setShowBorrowerLoanDetailsNav(!showBorrowerLoanDetailsNav);
  }

  const currentDate = new Date().toLocaleDateString();

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
          <BorrowerLoanDetails/>
        }
        <div className='font-bold text-gray-700 mt-5'>
          Current Statement of Account as of {currentDate}

          
        </div>
    </div>
  )
}

export default BorrowHistory
