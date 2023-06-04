import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ProfileTabs = ({profiletabs}) => {

    const router = useRouter()

    const navLink = [
        {
            name: "Profile",
            link: `/customerProfile/${profiletabs.UserId}`,
        },
        {
            name: "Loan Application",
            link: `/LoanApplication/${profiletabs.UserId}`,
        },
        {
            name: "Borrow History",
            link: `/BorrowHistory/${profiletabs.UserId}`,
        },
    ]

  return (
    <>
        <div class="sm:hidden mt-5 w-full">
            <select id="tabs" class="bg-gray-700 border border-gray-300 text-white w-72 text-md rounded-lg block p-2.5"
                onChange={(event) => router.push(event.target.value)}
                value={router.pathname}
            >
            {navLink.map(({link, name}) => (
                <option 
                    key={name}
                    value={link}
                    className='text-black bg-white'
                >
                    {name}
                </option>
            ))}
            </select>
        </div>
        <ul class="hidden mx-16 w-fit text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
            {navLink.map(({link, name}) => (
            <Link 
                key={name}
                href={link}
                className={`${router.pathname == link 
                    ? 'text-gray-900 bg-gray-300' 
                    : 'bg-white hover:text-gray-700 hover:bg-gray-300' } 
                    p-4 m-1 rounded-lg `}
            >
                {name}
            </Link>
            ))}
        </ul>
        <p class="mx-16 text-sm text-gray-500 font-normal italic md:py-3 py-0">Select a tab to view</p>
    </>
  )
}

export default ProfileTabs