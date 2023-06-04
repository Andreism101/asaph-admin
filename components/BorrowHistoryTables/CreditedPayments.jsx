import React from 'react'
import Link from 'next/link';

const CreditedPayments = () => {
  return (
    <div className='flex justify-center'>
      <div class=" overflow-x-auto px-5 my-5">
            <table class="w-50 text-left">
                <thead className="rounded-lg bg-slate-800 text-white">
                    <tr>
                    <th scope="col" class="px-6 py-3">Post Date</th>
                    <th scope="col" class="px-6 py-3">Payment Reference Number</th>
                    <th scope="col" class="px-6 py-3">Payment Amount</th>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CreditedPayments
