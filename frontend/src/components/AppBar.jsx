import React from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'

const AppBar = ({user}) => {

    const navigate = useNavigate()

    return (
        <nav className='flex justify-between items-center p-4 border-1 border-gray-300'>
            <div className='flex items-center gap-4'>
                
            <span className='font-bold'>Payment App</span>
            <div onClick={()=> navigate("/")} className='underline cursor-pointer'>Home</div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Hello {user}</span>
                <span className='bg-slate-400 rounded-full size-8 text-center pt-1'>U</span>
            </div>
        </nav>
    )
}

export default AppBar
