import React from 'react'
// import Logo from '../assets/ASA-Custom.png'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between px-4 py-4 bg-gray-700 items-center'>
        <h2 className='font-semibold text-white text-xl'>Hi, Andre</h2>
        <Link href="/" >
            <img className='w-16 h-16' src="/assets/ASA-Custom.png"/>
        </Link>
        <Link href="/" >
            <h2 className='text-blue-400 text-xl'>Log Out</h2>
        </Link>
    </div>
  )
}

export default Header
