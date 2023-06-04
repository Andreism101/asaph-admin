import LoanHistory from '@/components/BorrowHistoryTables/LoanHistory'
import PersonalInfo from '@/components/PersonalInfo'
import ProfileTabs from '@/components/ProfileTabs'
import { MdChevronRight, MdExpandMore } from "react-icons/md";
import React, { useState, useEffect } from "react";
import BorrowerLoanDetails from '@/components/BorrowerLoanDetails';
import StatementOfAccount from '@/components/StatementOfAccount';
import CreditedPayments from '@/components/BorrowHistoryTables/CreditedPayments';
import fireDb from "@/components/firebase";
import { useRouter } from 'next/router';
const BorrowHistory = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState({});
  
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const snapshot = await fireDb
            .child(`1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members/${userId}`)
            .get();
          if (snapshot.exists()) {
            setUser({ ...snapshot.val() });
          } else {
            setUser({});
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [userId]); 
  const [showBorrowerLoanDetailsNav, setShowBorrowerLoanDetailsNav] = useState(true)

  const BorrowerLoanDetailsNav =() =>{
    setShowBorrowerLoanDetailsNav(!showBorrowerLoanDetailsNav);
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className='mb-16'>
      <PersonalInfo personal={user}/>
        <div className='mx-5'>
          <div className='ml-5'>
            <ProfileTabs profiletabs={user}/>
            <LoanHistory history={user}/>
          </div>
        </div>
        <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
          <div onClick={BorrowerLoanDetailsNav} className='cursor-pointer'>
            {showBorrowerLoanDetailsNav ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
          </div>
          <p className='align-middle'>Borrower Loan Details</p>
        </div>
        {showBorrowerLoanDetailsNav && 
          <BorrowerLoanDetails borrow={user}/>
        }
        <div>
          <p className='font-bold text-gray-700 mt-5'>Current Statement of Account as of {currentDate}</p> 

          <StatementOfAccount statement={user}/>
          
        </div>
        <div>
          <p className='font-bold text-gray-700 mt-5'>Credited Payments</p> 
          <div className='flex'>
            <CreditedPayments credit={user}/>
          </div>
        </div>
    </div>
  )
}

export default BorrowHistory
