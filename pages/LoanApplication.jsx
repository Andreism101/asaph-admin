import ProfileTabs from '@/components/ProfileTabs'
import React from 'react'
import { MdChevronRight, MdExpandMore, MdCheck, MdClose } from "react-icons/md";
import {useState} from 'react'
import PersonalInfo from '@/components/PersonalInfo';
import Qualification from '@/components/Qualification';
import LoanQuote from '@/components/LoanQuote';
import Identification from '../components/CustomerProfile/Identification';

// AYUSIN MO TO KASE ANDREI AMBOBO MO 

const LoanApplication = () => {

    const [showIdentification, setShowIdentification] = useState(true)
    const [showLoanQuote, setShowLoanQuote] = useState(true)
  
    const identificationNav =() =>{
      setShowIdentification(!showIdentification);
    }
    const LoanQuoteNav =() =>{
      setShowLoanQuote(!showLoanQuote);
  }
  
    return (
      <>
        <PersonalInfo/>
        <div className='mx-5'>
          <ProfileTabs/>
        </div>
        <div>
          <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
            <div onClick={identificationNav} className='cursor-pointer'>
              {showIdentification ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
            </div>
            <p className='align-middle'>Identification</p>
          </div>
          {showIdentification && 
            <>
              <Identification/>
              <div className='grid md:grid-cols-5 font-normal ml-14'>
                <div className='mx-3 flex'>
                  <div class="flex items-center p-3 my-3 rounded-md">
                      <input id="checked-checkbox" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 rounded"/>
                      <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900">Surety-Maker?</label>
                      <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500">Has agreed to the Surety-Maker Statement</p>
                  </div>
                </div>
              </div>
            </>
          }
          <div>
            <div className='flex justify-start items-center pl-10 pt-4 font-bold text-lg'>
              <div onClick={LoanQuoteNav} className='cursor-pointer'>
                {showLoanQuote ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
              </div>
              <p className='align-middle'>Loan Quote</p>
            </div>
            {showLoanQuote && 
              <LoanQuote/>
            }
          </div>
          <Qualification/>
        </div>
      </>
    )
  }

export default LoanApplication
