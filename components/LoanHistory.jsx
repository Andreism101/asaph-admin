import React from 'react'
import Link from 'next/link';

const LoanHistory = () => {
  return (
    <>
        <div class=" overflow-x-auto shadow-md px-5 my-5">
            <table class="w-full text-left">
                <thead className="rounded-lg bg-slate-800 text-white">
                    <tr>
                    <th scope="col" class="px-6 py-3">Date</th>
                    <th scope="col" class="px-6 py-3">Loan Number</th>
                    <th scope="col" class="px-6 py-3">Loan Amount</th>
                    <th scope="col" class="px-6 py-3">Loan Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td scope="col" class="px-6 py-3 text-blue-700 hover:underline">
                            <Link href={'/customerProfile'}>
                                4/30/23
                            </Link>
                        </td>
                        <td scope="col" class="px-6 py-3">ADHD938024</td>
                        <td scope="col" class="px-6 py-3">&#8369;37,654</td>
                        <td scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> 
                                Not Complete
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default LoanHistory
