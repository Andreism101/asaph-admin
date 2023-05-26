import ProfileTabs from '@/components/ProfileTabs'
import React from 'react'
import { MdChevronRight, MdExpandMore, MdCheck, MdClose } from "react-icons/md";
import {useState} from 'react'
import PersonalInfo from '@/components/PersonalInfo';


const customerProfile = () => {

  const [showIdentification, setShowIdentification] = useState(true)
  const [showDTI, setShowDTI] = useState(true)
  const [showAdditional, setShowAdditional] = useState(true)
  const [showEmployment, setShowEmployment] = useState(true)

  const identificationNav =() =>{
    setShowIdentification(!showIdentification);
  }
  const DTINav =() =>{
    setShowDTI(!showDTI);
  }
  const AdditionalNav =() =>{
    setShowAdditional(!showAdditional);
  }

  const EmploymentNav =() =>{
    setShowEmployment(!showEmployment);
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
          </div>
        }

      </div>
      <div>
        <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
          <div onClick={AdditionalNav} className='cursor-pointer'>
            {showAdditional ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
          </div>
          <p className='align-middle'>Additional Information</p>
        </div>

        {showAdditional && 
          <div>
            <p className='underline ml-16 text-sm font-semibold'>HTH/House & Business Visit(HBV) Indicators</p>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Poverty Level</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Moderate Poor" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Housing</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Owned" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Family Member with PWD?</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Yes, Sibling" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Hiring Workers</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="No" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Family member working abroad</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="No" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>IP Group</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="N/A" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>4P’s Beneficiary</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="No" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>MCCT Beneficiary</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="No" disabled
                />
              </div>
            </div>
            <p className='underline ml-16 text-sm font-semibold'>PPI Scorecard (National Poverty Line)</p>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>No. of Family Members</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="4 and below" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Highest Grade</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Completed Highschool" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>House Condition(Roof)</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Mixed but predominantly strong" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>House Condition(Outer Walls)</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Mixed but predominantly strong" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Electricity</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Grid" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Water Supply</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Own use, faucet" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Has own a Refrigerator</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Yes" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>TV</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Yes" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Washing Machine</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Yes" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Toilet Condition</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Unimproved toilet" disabled
                />
              </div>
            </div>
          </div>
        }
      </div>
      <div>
        <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
          <div onClick={EmploymentNav} className='cursor-pointer'>
            {showEmployment ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
          </div>
          <p className='align-middle'>Employment Information</p>
        </div>

        {showEmployment && 
          <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employee Status</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Employed" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employer’s Name</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="Bolsia, Nadia" disabled
                />
              </div>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Employer’s Contact Number</label>
                </div>
                <input 
                  type="text" id="disabled-input" 
                  aria-label="disabled input" 
                  class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
                  value="09654183275" disabled
                />
              </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 font-normal mx-14 '>
              <div className='mx-3'>
                <div className='flex justify-between my-3 px-3'>
                  <label className='block text-sm font-medium'>Year/s of Employement</label>
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
                  <label className='block text-sm font-medium'>Salary Range</label>
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
    </>
  )
}

export default customerProfile