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
          className=' inline-flex text-gray-900 bg-white font-medium rounded-lg w-32 py-1.5 px-3 items-center justify-between hover:bg-slate-300 '
          > 
          
          {!isOpen ? <MdExpandMore/> : <MdChevronRight/>}
          Filter
      </button>

      {!isOpen && (
        <div 
          className='absolute w-full flex flex-col items-center justify-between top-11 rounded-md bg-white shadow-lg' 
        >
          {list.map((item, i) => (

            <div 
              className='flex w-full justify-between cursor-pointer hover:bg-slate-300'
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
