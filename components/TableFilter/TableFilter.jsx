import React, { useState } from 'react';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

const TableFilter = ({ onFilter }) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  const handleCheckboxChange = () => {
    setIsActiveFilter(!isActiveFilter);
    onFilter(!isActiveFilter);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="filter-checkbox"
        checked={isActiveFilter}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label htmlFor="filter-checkbox" className="text-gray-900">
        Active
      </label>
    </div>
  );
};

export default TableFilter;
