import React, { useState } from 'react';

const TableFilter = ({ onFilter }) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [isPendingFilter, setIsPendingFilter] = useState(false);
  const [isDeclinedFilter, setIsDeclinedFilter] = useState(false);

  const handleCheckboxChange = (filterType) => {
    if (filterType === 'ACTIVE') {
      setIsActiveFilter(!isActiveFilter);
      onFilter('ACTIVE', !isActiveFilter);
    } else if (filterType === 'PENDING') {
      setIsPendingFilter(!isPendingFilter);
      onFilter('PENDING', !isPendingFilter);
    } else if (filterType === 'DECLINED') {
      setIsDeclinedFilter(!isDeclinedFilter);
      onFilter('DECLINED', !isDeclinedFilter);
    }
  };

  return (
    <div className="flex items-center">
      <div className="mr-4 flex">
        <input
          type="checkbox"
          id="filter-active-checkbox"
          checked={isActiveFilter}
          className='w-7 h-7 text-blue-600 bg-gray-100 rounded'
          onChange={() => handleCheckboxChange('ACTIVE')}
        />
        <label htmlFor="filter-active-checkbox" className="text-gray-900 pl-2 font-semibold">
          Active
        </label>
      </div>
      <div className="mr-4 flex">
        <input
          type="checkbox"
          id="filter-pending-checkbox"
          checked={isPendingFilter}
          className='w-7 h-7 text-blue-600 bg-gray-100 rounded'
          onChange={() => handleCheckboxChange('PENDING')}
        />
        <label htmlFor="filter-pending-checkbox" className="text-gray-900 pl-2 font-semibold">
          Pending
        </label>
      </div>
      <div className="mr-4 flex">
        <input
          type="checkbox"
          id="filter-declined-checkbox"
          checked={isDeclinedFilter}
          className='w-7 h-7 text-blue-600 bg-gray-100 rounded'
          onChange={() => handleCheckboxChange('DECLINED')}
        />
        <label htmlFor="filter-declined-checkbox" className="text-gray-900 pl-2 font-semibold">
          Declined
        </label>
      </div>
    </div>
  );
};

export default TableFilter;
