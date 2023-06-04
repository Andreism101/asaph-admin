import React from 'react'

const Qualification = () => {
  return (
    <div className='pl-10 pt-4 font-bold text-xl flex flex-col'>
        Qualification
        
        <div class="inline-flex gap-3 rounded-md shadow-sm mt-4" role="group">
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-green-500 hover:bg-green-700 hover:text-white   rounded-lg">
            Approve
        </button>
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-red-400 hover:bg-red-600 hover:text-white rounded-lg ">
            Decline
        </button>
        </div>

    </div>
  )
}

export default Qualification
