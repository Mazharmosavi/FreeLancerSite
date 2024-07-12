import React from 'react'

function ConfirmDelete({resourceName,onClose,disabled,onConfirm}) {
  return (
    <div >
      <h2>آیا از حذف {resourceName} مطمئن هستید؟</h2>
      <div className='flex flex-between items-center gap-x-16 mt-2'>
        <button className='btn btn--primary flex-1' onClick={onClose} disabled={disabled}>
            لغو
        </button>
        <button className='btn btn--danger flex-1 py-3' onClick={onConfirm} disabled={disabled} >تائید</button>
      </div>
    </div>
  )
}

export default ConfirmDelete
