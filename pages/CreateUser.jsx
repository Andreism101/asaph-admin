import React, { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import CreateBorrower from '@/components/CreateBorrower'

const CreateUser = () => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [PASSWORD, setPASSWORD] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [landline, setLandline] = useState('');
  const [email, setEmail] = useState('');

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addNewAdmin = async () => {
    try {
      const adminData = {
        ...data,
        "EMPLOYEE_NUMBER": employeeNumber,
      };

      await firebase
        .database()
        .ref("1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Admin")
        .child(employeeNumber)
        .set(adminData);

      // New admin data added successfully
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
    <div className='pt-4 mb-5 grid grid-cols'>
        <button className='flex items-center gap-2 px-5 pt-4 font-bold text-xl'>
            <div>
            <Link
                href = '/Dashboard'
              >
                <MdArrowBack/>
              </Link>
            </div>
            <div>
                Create a New Admin
            </div>
        </button>
    </div>
    <div className='grid md:grid-cols-4 font-normal mx-5 '>
          <div className='mx-3 mt-5'>
            <label htmlFor='employeeNumber' className='block my-2 text-sm font-medium'>
            Employee Number
          </label>
          <input
            type='text'
            id='EMPLOYEE_NUMBER'
            className='my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
          </div>
          </div>
    <div className='grid md:grid-cols-4 font-normal mx-5 '>
          <div className='mx-3 mt-5'>
            <label htmlFor='firstname' className='block my-2 text-sm font-medium'>
              First Name
            </label>
            <input 
              type='text'
              id='PASSWORD'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={PASSWORD}
              onChange={(e) => setPASSWORD(e.target.value)}
            />
          </div>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Middle Name
              </label>
            <input 
              type='text'
              id='middleName'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Last Name
              </label>
            <input 
              type='text'
              id='lastName'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Suffix
              </label>
            <input 
              type='text'
              id='suffix'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
            />
          </div>
        </div>
        <div className='mx-4 font-normal px-4 py-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Local Home Address
              </label>
            <input 
              type='text'
              id='address'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
            />
        </div>
        <div className='grid md:grid-cols-3 font-normal mx-5 '>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Mobile Number
              </label>
            <input 
              type='text'
              id='mobileNumber'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>
              Landline
              </label>
            <input 
              type='text'
              id='landline'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={landline}
              onChange={(e) => setLandline(e.target.value)}
            />
          </div>
          <div className='mx-3 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Email Address</label>
            <input 
              type='text'
              id='email'
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='grid md:grid-cols-3 font-normal mx-5 '>
        <div className='mx-3 mt-5'>
        <label htmlFor='position' className='block my-2 text-sm font-medium'>Position</label>
          <select
            id='position'
            className='my-3 appearance-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
              <option value=''>Choose a position</option>
              <option value='position1'>Employee</option>
              <option value='position2'>Branch Head</option>
          </select>
        </div>
          <div className='mx-2 mt-5'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Branch</label>
          <select
            id='position'
            className='my-3 appearance-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
              <option value=''>Choose a branch</option>
              <option value='branch1'>Sta. Ana Branch</option>
              <option value='branch2'>Paco Branch</option>
              <option value='branch3'>Taguig Branch</option>
              <option value='branch4'>Pasig Branch</option>
              <option value='branch5'>Pateros Branch</option>
              <option value='branch6'>Mandaluyong Branch</option>
              <option value='branch7'>Quezon Branch</option>
          </select>
        </div>
        </div>
        <div className='grid md:grid-cols-3 w-1/3 font-normal mx-7 mt-5 '>
        
          <CreateBorrower/>
        </div>
    </>
  )
}

export default CreateUser
