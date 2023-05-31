import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='shadow-md bg-white flex justify-between w-full p-4 border rounded-md ease-in-out duration-300 hover:bg-blue-500 hover:text-white'>
        <div className='flex flex-col w-full'>
            <p className='text-3xl font-bold text-end'>31510</p>
            <p className='font-semibold text-lg pt-4'>Total Applicants</p>
        </div>
      </div>
      <div className='shadow-md bg-white flex justify-between w-full p-4 border rounded-md ease-in-out duration-300 hover:bg-blue-500 hover:text-white'>
        <div className='flex flex-col w-full'>
            <p className='text-3xl font-bold text-end'>45431</p>
            <p className='font-semibold text-lg pt-4'>Active Loans</p>
        </div>
      </div>
    </div>
  )
}

export default TopCards