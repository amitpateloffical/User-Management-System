import React from 'react'
import "./LogIn.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

const LogIn = () => {
    const navigate = useNavigate()
  return (
    <div className='login-container h-full flex flex-col'>
        <div className='flex gap-2 justify-center items-center h-full'>
<div className='h-[594px] w-[470px] bg-white flex justify-center items-center border border-black rounded card'>
<div>
   <div className='flex flex-col gap-8'>
    <div className='flex justify-center items-center'>
    <img src='/login.png' className='h-[100px] w-[300px]' />
    </div>
  
   <div className='flex flex-col'>
        <label><b>User Name</b></label>
        <input className='w-full py-3 px-2 border border-black rounded-md'/>
    </div>
    <div className='flex flex-col'>
        <label><b>Password</b></label>
        <input className='w-full py-3 px-2 border border-black rounded-md'/>
    </div>
    <div>
        <button className='bg-[#e69743] py-2 px-[195px] rounded-md text-white' onClick={(e)=>navigate("/dashboard")}>Sign In</button>
    </div>
    <div className='flex justify-center items-center gap-3'>
        <p className='border-b-2 border-black font-semibold '>Don't have an account? </p>
        <a className='text-[#e69743] font-bold cursor-pointer'>Sign Up</a>
    </div>
    <div  className='flex justify-center items-center gap-3'>
        <a className='text-[#e69743] font-bold cursor-pointer '>Forgot Password?</a>
        <a className='text-[#e69743] font-bold cursor-pointer '>Unlock Account</a>
    </div>
   </div>
</div>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default LogIn