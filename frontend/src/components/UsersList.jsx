import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const UsersList = ({user}) => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center py-4'>
      <div className='flex items-center gap-2'>
        <span className='bg-slate-400 rounded-full size-8 text-center pt-1'>U</span>
        <span>{user.firstName} {user.lastName}</span>
      </div>
      <div className='w-40'>

      <Button onClick={(e)=>navigate(`/send?id=${user._id}&name=${user.firstName}`)} label={"Send Money"}/>
      </div>
    </div>
  )
}

export default UsersList
