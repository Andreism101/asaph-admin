import LoanHistory from '@/components/BorrowHistoryTables/LoanHistory'
import PersonalInfo from '@/components/PersonalInfo'
import ProfileTabs from '@/components/ProfileTabs'
import { MdChevronRight, MdExpandMore } from "react-icons/md";
import {useState} from 'react'

import React from 'react'
import BorrowerLoanDetails from '@/components/BorrowerLoanDetails';
import StatementOfAccount from '@/components/StatementOfAccount';
import CreditedPayments from '@/components/BorrowHistoryTables/CreditedPayments';

const BorrowHistory = () => {

  const [showBorrowerLoanDetailsNav, setShowBorrowerLoanDetailsNav] = useState(true)

  const BorrowerLoanDetailsNav =() =>{
    setShowBorrowerLoanDetailsNav(!showBorrowerLoanDetailsNav);
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className='mb-16'>
      <PersonalInfo/>
        <div className='mx-5'>
          <div className='ml-5'>
            <ProfileTabs/>
            <LoanHistory/>
          </div>
        </div>
        <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
          <div onClick={BorrowerLoanDetailsNav} className='cursor-pointer'>
            {showBorrowerLoanDetailsNav ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
          </div>
          <p className='align-middle'>Borrower Loan Details</p>
        </div>
        {showBorrowerLoanDetailsNav && 
          <BorrowerLoanDetails/>
        }
        <div>
          <p className='font-bold text-gray-700 mt-5'>Current Statement of Account as of {currentDate}</p> 

          <StatementOfAccount/>
          
        </div>
        <div>
          <p className='font-bold text-gray-700 mt-5'>Credited Payments</p> 
          <div className='flex'>
            <CreditedPayments/>
          </div>
        </div>
    </div>
  )
}

export default BorrowHistory
