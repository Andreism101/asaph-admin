import React from 'react'

const Footer = () => {
  return (
    <div className='pt-24 m-0'>
        <footer className="bg-gray-700 shadow">
            <div className=" items-center md:w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2023 
                  <a href="/" className="hover:underline">
                    MICLOAN™
                  </a>
                  . All Rights Reserved.
                </span>
                
            </div>
        </footer>
    </div>
  )
}

export default Footer
