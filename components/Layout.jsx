import React from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col bg-gray-100 min-h-screen'>
      <div className='flex-1'>
        <Sidebar/>
        <div className='ml-20'>
          <Header/>
          <main>{children}</main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
