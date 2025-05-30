import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
        <div className='flex flex-col p-6 font-bold'>
            <h1 className='text-2xl font-bold'>Welcome to the Payment App</h1>
            <p className='mt-4'>This is a simple payment application (simulation) built with React and Node.js.</p>
            <p className='mt-2'>You can sign up, sign in, and manage your payments easily.</p>
        </div>

        <div className='flex justify-center items-center h-[200px]'>
            <div className='flex flex-col gap-4'>
                <Link to="/signup" className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Sign Up</Link>
                <Link to="/signin" className='bg-green-500 text-white p-2 rounded hover:bg-green-600'>Sign In</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
