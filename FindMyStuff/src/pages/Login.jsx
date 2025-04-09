import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center prata-regular h-[80vh]'>
      <p className='text-4xl mb-5'>LogIn</p>
      <form className='flex gap-2 flex-col justify-center items-center w-[70vw] sm:w-[25vw] gap-4 ' action="">
        <input className='border outline-none p-2 w-full' type="text" placeholder='Username' name='Username' required />
        <input className='border outline-none p-2 w-full' type="password" placeholder='password' name='password' required />
        <div className='w-full border bg-black text-white text-center py-2 rye-regular text-xl'><button>Login</button></div>
      <Link className='self-end text-blue-700 text-sm' to="/signup">don't have account</Link>
      </form>
    </div>
  )
}

export default Login
