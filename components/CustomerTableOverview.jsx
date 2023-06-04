import Link from 'next/link';
import { MdOutlineSearch, MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import Export from './Export';
import TableFilter from './TableFilter/TableFilter';
import fireDb from "./firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const CustomerTableOverview = () => {
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState('loan_id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [isPendingFilter, setIsPendingFilter] = useState(false);
  const [isDeclinedFilter, setIsDeclinedFilter] = useState(false);

//ezi added---------------------------------------------
  const [data, setData] = useState({});

  const router = useRouter();

  useEffect(() => {
    fireDb.child("1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
}, []);



//Ezi added------------------------------------------------
const handleSort = (columnName) => {
  if (sortColumn === columnName) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortColumn(columnName);
    setSortDirection('asc');
  }
};

const handleFilter = (filterType, checked) => {
  if (filterType === 'ACTIVE') {
    setIsActiveFilter(checked);
  } else if (filterType === 'PENDING') {
    setIsPendingFilter(checked);
  } else if (filterType === 'DECLINED') {
    setIsDeclinedFilter(checked);
  }
};

const sortedData = Object.values(data);

  if (sortColumn !== '') {
    sortedData.sort((a, b) => {
      const valueA = typeof a[sortColumn] === 'string' ? a[sortColumn].toLowerCase() : a[sortColumn];
      const valueB = typeof b[sortColumn] === 'string' ? b[sortColumn].toLowerCase() : b[sortColumn];

      if (sortColumn === 'loan_id') {
        // Sort by status order: ACTIVE, PENDING, DECLINED
        const statusOrder = ['ACTIVE', 'PENDING', 'DECLINED'];
        const statusA = statusOrder.indexOf(a.status);
        const statusB = statusOrder.indexOf(b.status);
        if (statusA !== statusB) {
          return sortDirection === 'asc' ? statusA - statusB : statusB - statusA;
        }
      }

      if (valueA < valueB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

}

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-items-start gap-3 pb-4 mx-5">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="table-search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
          placeholder="Search: Name, ID"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div className="flex w-9/12 gap-4 md:flex-none">
          <div className="grow">
            <TableFilter onFilter={handleFilter} />
          </div>
          <div className="">
            <Export />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto shadow-md px-5">
        <table className="w-full text-left">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            Borrower Search
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Enter the Name or ID designed to easily locate a borrower.
            </p>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Sort/Filter the name by clicking the name headers.
            </p>
          </caption>
          <thead className="rounded-lg bg-slate-800 text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort('UserId')}
              >
                Borrower ID
                {sortColumn === 'UserId' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={16} />
                    ) : (
                      <MdOutlineArrowDropDown size={16} />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort('FirstName')}
              >
                First Name
                {sortColumn === 'FirstName' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={16} />
                    ) : (
                      <MdOutlineArrowDropDown size={16} />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort('MiddleInitial')}
              >
                Middle Initial
                {sortColumn === 'MiddleInitial' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={16} />
                    ) : (
                      <MdOutlineArrowDropDown size={16} />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort('LastName')}
              >
                Last Name
                {sortColumn === 'LastName' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={16} />
                    ) : (
                      <MdOutlineArrowDropDown size={16} />
                    )}
                  </span>
                )}
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort('loan_id')}
              >
                Loan ID
                {sortColumn === 'loan_id' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? (
                      <MdOutlineArrowDropUp size={16} />
                    ) : (
                      <MdOutlineArrowDropDown size={16} />
                    )}
                  </span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData
              .filter((item) => {
                if (isActiveFilter && item.status.toLowerCase() === 'active') {
                  return true;
                } else if (isPendingFilter && item.status.toLowerCase() === 'pending') {
                  return true;
                } else if (isDeclinedFilter && item.status.toLowerCase() === 'declined') {
                  return true;
                } else if (!isActiveFilter && !isPendingFilter && !isDeclinedFilter) {
                  return true;
                }
                return false;
              })
              .filter((item) =>
                search === ''
                  ? item
                  : item.UserId.toLowerCase().includes(search) ||
                    item.LastName.toLowerCase().includes(search) ||
                    item.LastName.toLowerCase().includes(search) ||
                    item.LastName.toLowerCase().includes(search)
              )
              .map((item) => (
                <tr className="bg-white border-b" key={item.UserId}>
                  <td
                    scope="col"
                    className="px-6 py-3 text-blue-700 font-semibold hover:underline"
                  >
                    <Link href={`/customerProfile/${item.UserId}`}>{item.UserId}</Link>
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.FirstName}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.MiddleInitial}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.LastName}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.PermanentAddress}
                  </td>
                  <td
                    scope="col"
                    className={`px-6 py-3 font-semibold hover:underline ${
                      item.status === 'ACTIVE'
                        ? 'text-green-500'
                        : item.status === 'PENDING'
                        ? 'text-orange-500'
                        : item.status === 'DECLINED'
                        ? 'text-red-500'
                        : ''
                    }`}
                  >
                    {item.loan_id}
                    {item.status === 'ACTIVE' && <span className="ml-1">-ACTIVE</span>}
                    {item.status === 'PENDING' && <span className="ml-1">-PENDING</span>}
                    {item.status === 'DECLINED' && <span className="ml-1">-DECLINED</span>}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
 
};

export default CustomerTableOverview;
