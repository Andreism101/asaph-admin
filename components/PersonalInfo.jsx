
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fireDb from "../pages/firebase";

const PersonalInfo = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  return (
    <>
        <div className='px-5 pt-4 mb-5 font-bold text-xl'>
        Borrower Details
      </div>
      <div className='pl-10 pt-4 font-bold text-xl'>
        Personal Information
        <div className='grid md:grid-cols-4 font-normal mx-5 '>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>First Name</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value={user.FirstName} disabled
            />
          </div>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Middle Name</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="Dela" disabled
            />
          </div>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Last Name</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="Cruz" disabled
            />
          </div>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Suffix</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="No suffix" disabled
            />
          </div>
        </div>
        <div className='mx-4 font-normal px-4 py-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Local Home Address</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="B1 L2 Test St. Test, Test City" disabled
            />
        </div>
        <div className='grid md:grid-cols-3 font-normal mx-5 '>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Mobile Number</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="09123456789" disabled
            />
          </div>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Landline</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="8-7000" disabled
            />
          </div>
          <div className='mx-3'>
            <label for='sucess' className='block my-2 text-sm font-medium'>Email Address</label>
            <input 
              type="text" id="disabled-input" 
              aria-label="disabled input" 
              class="my-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed" 
              value="jdelacruz@email.com" disabled
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default PersonalInfo