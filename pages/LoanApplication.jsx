import ProfileTabs from '@/components/ProfileTabs'
import React from 'react'
import { MdChevronRight, MdExpandMore, MdCheck, MdClose } from "react-icons/md";
import {useState} from 'react'
import PersonalInfo from '@/components/PersonalInfo';
import Qualification from '@/components/Qualification';
import DTI from '@/components/DTI';

// AYUSIN MO TO KASE ANDREI AMBOBO MO 

const LoanApplication = () => {

    const [showIdentification, setShowIdentification] = useState(true)
    const [showDTI, setShowDTI] = useState(true)
  
    const identificationNav =() =>{
      setShowIdentification(!showIdentification);
    }
    const DTINav =() =>{
      setShowDTI(!showDTI);
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
            <div>
              <div className='grid md:grid-cols-5 font-normal'>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'>Primary ID</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="primaryID.jpg" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'>Secondary ID</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="secondaryID.jpg" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'>Payslip</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="payslip.png" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='grid md:grid-cols-5 font-normal '>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'> <b>Guarantor's</b> Primary ID</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="primaryID.jpg" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'>Secondary ID</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="secondaryID.jpg" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='flex justify-between my-3 px-3'>
                    <label className='block text-sm font-medium'>Payslip</label>
                    <label className='block text-sm font-medium'>View</label>
                  </div>
                  <input 
                    type="text" id="disabled-input" 
                    aria-label="disabled input" 
                    class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                    value="payslip.png" disabled
                  />
                  <div className='flex justify-between px-5 gap-4'>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-green-800 hover:bg-green-700'>
                      <MdCheck size={20} />
                    </button>
                    <button className='flex justify-center p-2 rounded-md w-36 text-white bg-red-500 hover:bg-red-400'>
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
                <div className='mx-3 flex'>
                  <div class="flex items-center p-3 my-3 rounded-md">
                      <input id="checked-checkbox" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 rounded"/>
                      <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900">Surety-Maker?</label>
                      <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500">Has agreed to the Surety-Maker Statement</p>
                  </div>
                </div>
              </div>
            </div>
          }
          <div>
            <div className='flex justify-start items-center pl-10 pt-4 font-bold text-lg'>
              <div onClick={DTINav} className='cursor-pointer'>
                {showDTI ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
              </div>
              <p className='align-middle'>DTI (Debt-to-Income Ratio)</p>
            </div>
            {showDTI && 
              <DTI/>
            }
          </div>
          <Qualification/>
        </div>
      </>
    )
  }

export default LoanApplication
