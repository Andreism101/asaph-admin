import Link from 'next/link';
import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import TableFilter from './TableFilter/TableFilter';
import Export from './Export';

const CustomerTableOverview = () => {
  return (
    <div>
        <div class="flex flex-col md:flex-row items-start justify-items-start gap-3 pb-4 mx-5">
            <label for="table-search" class="sr-only">Search</label>
            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="Search : Name, ID"/>
            <div className='flex w-9/12 gap-4 md:flex-none'>
                <div className='grow'>
                    <TableFilter/>
                </div>
                <div className=''>
                    <Export/>
                </div>
            </div>
        </div>
        <div class=" overflow-x-auto shadow-md px-5">
            
            <table class="w-full text-left">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                    Borrower Search
                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Enter the Name or ID designed to easily locate a borrower.
                    </p>
                </caption>
                <thead className="rounded-lg bg-slate-800 text-white">
                    <tr>
                    <th scope="col" class="px-6 py-3">Borrower ID</th>
                    <th scope="col" class="px-6 py-3">First Name</th>
                    <th scope="col" class="px-6 py-3">Middle Name</th>
                    <th scope="col" class="px-6 py-3">Last Name</th>
                    <th scope="col" class="px-6 py-3">Loan Date</th>
                    <th scope="col" class="px-6 py-3">Loan Amount</th>
                    <th scope="col" class="px-6 py-3">Loan Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td scope="col" class="px-6 py-3 text-blue-700 hover:underline">
                            <Link href={'/customerProfile'}>
                                K11893274
                            </Link>
                        </td>
                        <td scope="col" class="px-6 py-3">Juan</td>
                        <td scope="col" class="px-6 py-3">Dela</td>
                        <td scope="col" class="px-6 py-3">Cruz</td>
                        <td scope="col" class="px-6 py-3">4/30/23</td>
                        <td scope="col" class="px-6 py-3">&#8369;18521.33</td>
                        <td scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Active
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CustomerTableOverview