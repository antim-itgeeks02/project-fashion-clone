import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const LoginPage = () => {
  const [isTrue, setTrue] = useState(false);

  const handleClick = () => {
    setTrue(!isTrue);
  }
  return (
    <>
      <form className=" container mx-auto mt-[6%] w-[28%] flex flex-col gap-2 text-[#2b2b2b] h-[90vh] font-bold text-[15px] tracking-[0.5px]">
        <h1 className=' text-[23px] mx-auto py-5'>Login</h1>
        <div className='flex flex-col gap-1'>
          <label for="email" >Email</label>
          <input className='outline-none border border-[#d5d5d5] p-[2px] w-full h-[50px]' type='email' id='email' />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between'>
            <label for="password">Password</label>
            <p className='underline font-extralight'>Forgot your password?</p>
          </div>
          <input className='outline-none border border-[#d5d5d5] p-[2px] w-full h-[50px]' type='password' id='password' />
        </div>
        <button className='w-full bg-[#2b2b2b] text-[white] text-center p-2 text-[15px] font-medium'>Sign In</button>
        <div className='flex items-center justify-between'>
          <div className='border-t border-solid w-[45%]'></div>
          <p className='text-[#d5d5d5] font-medium'>or</p>
          <div className='border-t border-solid w-[45%]'></div>
        </div>
        <div className='w-full bg-[#ededed] text-center p-2 text-[15px] font-medium text-black cursor-pointer' onClick={handleClick}>Create Account</div>
      </form>

      {/* Create Account */}
      {isTrue && <div className=' opacity-80 bg-[#1e1e1e] w-full h-full fixed top-0 right-0 z-5 '></div>}
      {isTrue && 
      <div className='text-[#2b2b2b] absolute z-10 left-[50%] top-[10vh] bg-white font-bold text-[15px] tracking-[0.5px]' style={{ transform: 'translate(-50%)' }} >
        <div className=' w-[880px] h-full mx-auto p-[60px] flex relative m-2 '>
          <div className='w-[100%] flex flex-col gap-2'>
            <h2 className=' text-[23px]'>Create Account</h2>
            <div className='flex flex-col gap-1'>
              <label for="first-name" >First Name</label>
              <input className='border outline-none border-[#d5d5d5] p-[2px] w-full h-[50px]' type='text' id='first-name' />
            </div>
            <div className='flex flex-col gap-1'>
              <label for="last-name" >Last Name</label>
              <input className='border border-[#d5d5d5] outline-none p-[2px] w-full h-[50px]' type='text' id='last-name' />
            </div>
            <div className='flex flex-col gap-1'>
              <label for="email2" >Email</label>
              <input className='border border-[#d5d5d5] p-[2px] outline-none w-full h-[50px]' type='email' id='email2' />
            </div>
            <div className='flex flex-col gap-1'>
              <label for="password2" >Password</label>
              <input className='border border-[#d5d5d5] p-[2px] w-full outline-none h-[50px]' type='password' id='password2' />
            </div>
            <div className=' cursor-pointer bg-[#2b2b2b] text-white p-4 font-medium tracking-[2px]' style={{ width: 'fit-content' }}>Create</div>
          </div>
          <RxCross1 className=' cursor-pointer' onClick={handleClick} />
        </div>
      </div>}
    </>
  )
}
export default LoginPage