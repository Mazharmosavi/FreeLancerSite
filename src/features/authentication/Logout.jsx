import React from 'react'
import { HiArrowRight, HiOutlineArrowCircleRight } from 'react-icons/hi';
import Loading from '../../ui/Loading';
import useLogoutApi from './useLOgoutApi'

function Logout() {
    const {isLoading,LogoutApi} = useLogoutApi();
  return (isLoading ? (<Loading/>):(
    <button onClick={LogoutApi}>
        <HiOutlineArrowCircleRight className='w-5 h-5 text-secondary-500 hover:text-error'/>
    </button>
  ))
}
export default Logout
