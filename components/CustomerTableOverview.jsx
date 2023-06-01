import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineSearch, MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import Export from './Export';
import { data } from './TestData/test_users';
import TableFilter from './TableFilter/TableFilter';

const CustomerTableOverview = () => {
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState(''); // Updated initial state
  const [sortDirection, setSortDirection] = useState('asc'); // Updated initial state
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortDirection('asc');
    }
  };

  const handleFilter = (isActive) => {
    setIsActiveFilter(isActive);
  };

  const sortedData = [...data];

  if (sortColumn !== '') {
    sortedData.sort((a, b) => {
      const valueA = a[sortColumn].toLowerCase();
      const valueB = b[sortColumn].toLowerCase();

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
                onClick={() => handleSort('id')}
              >
                Borrower ID
                {sortColumn === 'id' && (
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
                onClick={() => handleSort('first_name')}
              >
                First Name
                {sortColumn === 'first_name' && (
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
                onClick={() => handleSort('middle_name')}
              >
                Middle Name
                {sortColumn === 'middle_name' && (
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
                onClick={() => handleSort('last_name')}
              >
                Last Name
                {sortColumn === 'last_name' && (
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
              <th scope="col" className="px-6 py-3">
                Loan ID
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData
              .filter((item) => {
                if (isActiveFilter) {
                  return item.status.toLowerCase() === 'active';
                } else {
                  return true;
                }
              })
              .filter((item) =>
                search === ''
                  ? item
                  : item.id.toLowerCase().includes(search) ||
                    item.first_name.toLowerCase().includes(search) ||
                    item.last_name.toLowerCase().includes(search) ||
                    item.address.toLowerCase().includes(search)
              )
              .map((item) => (
                <tr className="bg-white border-b" key={item.id}>
                  <td
                    scope="col"
                    className="px-6 py-3 text-blue-700 font-semibold hover:underline"
                  >
                    <Link href="/customerProfile">{item.id}</Link>
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.first_name}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.middle_name}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.last_name}
                  </td>
                  <td scope="col" className="px-6 py-3">
                    {item.address}
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
                    <Link href="/customerProfile">
                      {item.loan_id}
                  {item.status === 'ACTIVE' && <span className="ml-1">-ACTIVE</span>}
                      {item.status === 'PENDING' && (
                        <span className="ml-1">-PENDING</span>
                      )}
                      {item.status === 'DECLINED' && (
                        <span className="ml-1">-DECLINED</span>
                      )}
                    </Link>
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
