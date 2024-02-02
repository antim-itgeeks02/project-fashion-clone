import React from 'react'

const LoginPage = () => {
  return (
    <div className=" container mx-auto w-[28%] flex flex-col gap-2 text-[#2b2b2b] my-10 font-bold text-[15px]">
      <h1 className=' text-[23px] mx-auto py-5'>Login</h1>
      <div className='flex flex-col gap-1'>
        <label for="email" >Email</label>
        <input className='border border-[#d5d5d5] p-[2px] w-full h-[50px]' type='email' id='email' />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <label for="password">Password</label>
          <p className='underline font-extralight'>Forgot your password?</p>
        </div>
        <input className='border border-[#d5d5d5] p-[2px] w-full h-[50px]' type='password' id='password' />
      </div>
      <div className='w-full bg-[#2b2b2b] text-[white] text-center p-2'>Sign In</div>
      <div>
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <div>Create Account</div>
    </div>
  )
}
export default LoginPage