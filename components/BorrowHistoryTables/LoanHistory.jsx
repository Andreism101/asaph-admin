import React from 'react'
import Link from 'next/link';

const LoanHistory = ({history}) => {
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
                        <td scope="col" class="px-6 py-3">{history.load_id}</td>
                        <td scope="col" class="px-6 py-3">&#8369;{history.LoanValue}</td>
                        <td scope="col" class="px-6 py-3">
                            <div class="flex flex-col items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> 
                                {history.status}
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
