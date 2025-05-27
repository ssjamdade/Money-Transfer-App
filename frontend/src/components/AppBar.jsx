import React from 'react'

const AppBar = ({user}) => {
    return (
        <nav className='flex justify-between items-center p-4 border-1 border-gray-300'>
            <span className='font-bold'>Payment App</span>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Hello {user}</span>
                <span className='bg-slate-400 rounded-full size-8 text-center pt-1'>U</span>
            </div>
        </nav>
    )
}

export default AppBar
