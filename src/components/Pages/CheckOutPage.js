import React from 'react'
import { Link } from 'react-router-dom'
import { IoBagHandleOutline } from "react-icons/io5";

const CheckOutPage = () => {
  return (
    <div className='w-[1105px] m-auto'>
      <div className='p-[21px] text-[24px] flex justify-between '>
        <Link to={'/'}><h1>Fashionopolism Galleria</h1></Link>
        <IoBagHandleOutline className='text-blue-500' />
      </div>
      <div className='flex'>
        <div className='border-t border-r w-[60%] p-[21px] flex flex-col gap-5 '>

          <div className='flex gap-3 flex-col'>
            <h2 className='text-[24px]'>Contact</h2>
            <input className='border p-[13.5px] py-[11px] rounded-md' type='email' placeholder='Email' />
            <div className='flex gap-2 items-center'>
              <input className='' type='checkBox' id='checkBox' />
              <label for='checkBox'>Email me with news and offers</label>
            </div>
          </div>

          <div className='flex gap-3 flex-col'>
            <h2 className='text-[24px]'>Delivery</h2>
            <div className='border p-[13.5px] py-[11px]'>
              <select >
                <option>India</option>
                <option>US</option>
                <option>America</option>
                <option>Nepal</option>
                <option>Pakistan</option>
              </select>
            </div>
            <div className='flex gap-5'>
              <input className='border p-[13.5px] py-[11px]' type='text' placeholder='First Name' />
              <input className='border p-[13.5px] py-[11px]' type='text' placeholder='last Name' />
            </div>
          </div>
        </div>
        <div className='border-t w-[40%] h-[100px] '></div>
      </div>
    </div>
  )
}

export default CheckOutPage