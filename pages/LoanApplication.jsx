import ProfileTabs from '@/components/ProfileTabs'
import React, { useState, useEffect } from "react";
import { MdChevronRight, MdExpandMore, MdCheck, MdClose } from "react-icons/md";

import PersonalInfo from '@/components/PersonalInfo';
import Qualification from '@/components/Qualification';
import MonthlyAmortization from '@/components/MonthlyAmortization';
import Identification from '../components/CustomerProfile/Identification';
import Employment from '@/components/CustomerProfile/Employment';
import fireDb from "@/components/firebase";
import { useRouter } from 'next/router';
// AYUSIN MO TO KASE ANDREI AMBOBO MO 

const LoanApplication = () => {
    //---------
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

    //----------

    const [showIdentification, setShowIdentification] = useState(true)
    const [showEmployment, setShowEmployment] = useState(true)
    const [showMonthlyAmortization, setShowMonthlyAmortization] = useState(true)

  
    const identificationNav =() =>{
      setShowIdentification(!showIdentification);
    }

    const EmploymentNav =() =>{
      setShowEmployment(!showEmployment);
    }

    const MonthlyAmortizationNav =() =>{
      setShowMonthlyAmortization(!showMonthlyAmortization);
    }
  
    return (
      <>
        <PersonalInfo personal={user}/>
        <div className='mx-5'>
          <ProfileTabs profiletabs={user}/>
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
              <div onClick={EmploymentNav} className='cursor-pointer'>
                {showEmployment ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
              </div>
              <p className='align-middle'>Employment Information(Current)</p>
            </div>
            {showEmployment && 
              <Employment employment={user}/>
            }
          </div>

          <div>
            <div className='flex justify-start items-center pl-10 pt-4 font-bold text-lg'>
              <div onClick={MonthlyAmortizationNav} className='cursor-pointer'>
                {showMonthlyAmortization ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
              </div>
              <p className='align-middle'>Loan Quote</p>
            </div>
            {showMonthlyAmortization && 
              <MonthlyAmortization/>
            }
          </div>
          <Qualification/>
        </div>
      </>
    )
  }

export default LoanApplication
