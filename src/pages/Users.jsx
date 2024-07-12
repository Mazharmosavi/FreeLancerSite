import React from 'react'
import UserTable from '../features/admin/users/UserTable'

function Users() {
  return (
    <div>
        <h1 className='font-bold text-secondary-700 text-xl mb-8'>
            لیست کاربران
        </h1>
        <UserTable/>
    </div>
  )
}

export default Users