import Link from 'next/link'
import React from 'react'
import { MdPersonAdd } from 'react-icons/md'

const AddUser = () => {
  return (
    <Link
        href={'/CreateUser'}
    >
        <button className='flex m-3 justify-items-center items-center p-2 rounded bg-white shadow-md hover:bg-slate-300'>
                <div className='align-center'>
                    <MdPersonAdd
                        color="rgb(156 163 175"
                    />
                </div>
                <div className='px-2 text-sm text-gray-400'>
                    Add Admin
                </div>
        </button>
    </Link>
  )
}

export default AddUser
