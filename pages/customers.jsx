import CustomerTableOverview from '@/components/CustomerTableOverview';
import Layout from '@/components/Layout';
import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

const customers = () => {
  return (
      <div className='flex overflow-x-auto justify-center align-middle px-5 pt-5'>
        <div class="flex justify-between pb-4 pl-96 md:pl-0 ">
          <label for="table-search" class="sr-only">Search</label>
            <CustomerTableOverview/>
          </div>
      </div>
  )
}

export default customers
