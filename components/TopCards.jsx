import React, { useEffect, useState } from 'react';
import fireDb from './firebase';

const TopCards = () => {
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [activeLoans, setActiveLoans] = useState(0);

  useEffect(() => {
    // Fetch the data from Firebase and calculate counts
    const fetchData = async () => {
      try {
        const snapshot = await fireDb.child("1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members").once('value');
        const data = snapshot.val();
        
        // Calculate the count of total applicants
        const totalApplicantsCount = Object.keys(data).length;
        setTotalApplicants(totalApplicantsCount);

        // Calculate the count of active loans
        const activeLoansCount = Object.values(data).reduce((count, item) => {
          if (item.status === 'ACTIVE') {
            return count + 1;
          }
          return count;
        }, 0);
        setActiveLoans(activeLoansCount);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='shadow-md bg-white flex justify-between w-full p-4 border rounded-md ease-in-out duration-300 hover:bg-blue-500 hover:text-white'>
        <div className='flex flex-col w-full'>
          <p className='text-3xl font-bold text-end'>{totalApplicants}</p>
          <p className='font-semibold text-lg pt-4'>Total Applicants</p>
        </div>
      </div>
      <div className='shadow-md bg-white flex justify-between w-full p-4 border rounded-md ease-in-out duration-300 hover:bg-blue-500 hover:text-white'>
        <div className='flex flex-col w-full'>
          <p className='text-3xl font-bold text-end'>{activeLoans}</p>
          <p className='font-semibold text-lg pt-4'>Active Loans</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
