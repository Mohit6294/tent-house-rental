import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center  h-screen'>
     <p className='text-3xl font-bold text-red-700'> You're not Authorized, Click to Login Below</p>
      <Link to={"/"} className='text-2xl w-48 font-bold text-white border border-black bg-red-700'>Login</Link>
      </div>
  )
}

export default Error