import React from 'react'
import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function SideBar({children}) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className='flex flex-col gap-y-4'>
       {children}
      </ul>
    </div>
  )
}

export default SideBar




