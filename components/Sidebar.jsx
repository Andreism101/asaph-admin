import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useState} from 'react'
import { MdOutlineMenu, MdDashboard, MdPeopleAlt } from "react-icons/md";

const Sidebar = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [showText, setShowText] = useState(false)

    const handeNav =() =>{
        setMenuOpen(!menuOpen);
        setShowText(!showText);
    }

  return (
    <div className='flex'>
        <div className={
            menuOpen
            ?'fixed w-48 h-60 p-4 bg-gray-800 flex flex-col justify-between ease-in-out duration-300 items-start rounded-br-3xl'
            :'fixed w-20 h-60 p-4 bg-gray-800 flex flex-col justify-between ease-in-out duration-300 rounded-br-3xl'
        }>
            <div className='flex flex-col items-center'>
                <div onClick={handeNav} className='cursor-pointer'>
                    <div>
                        <MdOutlineMenu 
                        size={30} 
                        style={{ 
                            color: 'white' 
                            }}
                        />
                    </div>
                </div>
                <span className='border-b-[1px] border-gray-200 w-full p-2 h-10'></span>
                <Link href='/'>
                    <div className='flex items-center gap-11 text-white hover:text-blue-400 cursor-pointer my-5 ease-in-out duration-300'>
                        <div>
                            <MdDashboard size={35}/>
                        </div>
                            {showText && 
                                <p className='font-semibold'>Dashboard</p>
                            }
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full '></span>
                <Link href='/customers'>
                    <div className='flex items-center gap-14 text-white hover:text-blue-400 cursor-pointer my-5 ease-in-out duration-300'>
                        <div>
                            <MdPeopleAlt size={35}/>
                        </div>
                        {showText && 
                            <p className='font-semibold'>Borrower <p></p> Search</p>
                        }
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
