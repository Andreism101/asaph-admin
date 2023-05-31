import React from 'react'
import { MdOutlineFileOpen } from 'react-icons/md'

const Export = () => {
  return (
    <button className='flex justify-items-center items-center sm:mr-14 p-2 rounded bg-white shadow-md hover:bg-slate-300'>
        <div className='p-1'>
            <MdOutlineFileOpen/>
        </div>
        <div className='font-medium md:text-gray-400'>
            Export
        </div> 
    </button>
  )
}

export default Export
