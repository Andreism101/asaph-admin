import React from 'react'
import AddUser from '@/components/AddUser'
import { MdArrowBack } from 'react-icons/md'

const CreateUser = () => {
  return (
    <div className='grid grid-cols-2'>
        <button className='flex items-center gap-2 px-5 pt-4 font-bold text-xl'>
            <div>
                <MdArrowBack/>
            </div>
            <div>
                Create a New Admin
            </div>
        </button>
    </div>
  )
}

export default CreateUser
