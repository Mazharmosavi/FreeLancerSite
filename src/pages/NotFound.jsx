import React from 'react'
import { useMoveBack } from '../hooks/useMoveBack'
import { HiArrowRight } from "react-icons/hi"

function NotFound() {
    const moveBack = useMoveBack()
  return (
    <div className='sm:max-w-sm flex justify-center pt-10 '>
      <div >
        <h1 className='text-xl font-bold text-slate-700 mb-8'>
            صفحه ای که دنبالش بودید یافت نشد
        </h1>
        <button onClick={moveBack} className="w-6 h-6 text-primary-900">برگشت</button>
      </div>
    </div>
  )
}

export default NotFound
