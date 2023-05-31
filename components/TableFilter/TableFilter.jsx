import React, { useState } from 'react'
import list from './TableFilterOptions.json'
import { MdChevronRight, MdExpandMore } from "react-icons/md";

const TableFilter = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='relative flex flex-col'>
      <button 
          onClick={() => setIsOpen((prev) => !prev)}
          type='button'
          className='shadow-md inline-flex text-gray-900 bg-white font-medium rounded-md w-32 py-2 px-3 items-center justify-between hover:bg-slate-300 '
          > 
          
          {!isOpen ? <MdExpandMore/> : <MdChevronRight/>}
          Filter
      </button>

      {!isOpen && (
        <div 
          className='absolute w-32 flex flex-col items-center justify-between top-11 rounded-md bg-white shadow-lg' 
        >
          {list.map((item, i) => (

            <div 
              className='flex w-32 justify-between cursor-pointer hover:bg-slate-300'
              key={i}
            >
              <h3>{item.option}</h3>
            </div>

          ))}
          
        </div>
      )}

    </div>
  )
}

export default TableFilter
