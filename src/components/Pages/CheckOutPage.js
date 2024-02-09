import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const CheckOutPage = () => {
  const [toHide, setToHide] = useState(false);
  const [formData, setFormData] = useState({
    email: '', checkBoxEmail: false, selectCountry: '', firstName: '',
    lastName: '', address: '', apartment: '', postalCode: '', city: '',
    checkBoxSave: false, cardNumber: '', expDate: '', cardName: '',
    securityCode: '', billingBox: true, billingCountry: '', billingFirstName: '',
    billingLastName: '', billingAddress: '', billingApartment: '', billingCity: '',
    billingPostalCode: ''
  })
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkBox' ? checked : value
      }
    })
  }
  console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const { localStorage } = window;
  const initialState = JSON.parse(localStorage.getItem('cart'))
  var subTotal = 0;
  if (initialState.length > 0) {
    var funToGetPrice = initialState.map((item) => {
      return (item.quantity * item.dataToShow.variants[0].price)
    })
    subTotal = funToGetPrice.reduce((acc, crr) => Number(acc) + Number(crr));
  }

  return (
    <>
      <div className='p-[21px] text-[24px]  w-[1105px] mx-auto '>
        <div className='px-[21px] flex justify-between items-center'>
          <Link to={'/'}><h1 className='font-semibold'>Fashionopolism Galleria</h1></Link>
          <Link to={'/'}><IoBagHandleOutline className='text-blue-500' /></Link>
        </div>
      </div>
      <div className='border-t w-full'></div>
      <div className='w-[1105px] m-auto flex'>

        <div className='w-[59%] h-[85vh]'>
          <form className='border-r w-[100%] p-[42px] flex flex-col gap-5 '>

            <div className='flex gap-3 flex-col'>
              <h2 className='text-[24px] font-semibold'>Contact</h2>
              <input onChange={handleChange}
                className='border border-[#d5d5d5] p-[13.5px] py-[11px] rounded-md outline-sky-600'
                required name='email' type='email' placeholder='Email' value={formData.email} />
              <div className='flex gap-2 items-center'>
                <input onChange={handleChange}
                  className='border-[#d5d5d5]'
                  name='checkBoxEmail' type='checkBox' id='checkBoxEmail' checked={formData.checkBoxEmail} />
                <label htmlFor='checkBoxEmail'>Email me with news and offers</label>
              </div>
            </div>

            <div className='flex gap-3 flex-col'>
              <h2 className='text-[24px] font-semibold'>Delivery</h2>
              <div className='relative'>
                <label className='absolute text-[grey] text-[13px] pl-[15px] pt-[9px]'>Country/Region</label>
                <select onChange={handleChange}
                  required className='border-[#d5d5d5]  border rounded-md pt-[21px] pr-[30px] pl-[11px] pb-[11px] outline-sky-600 w-full'
                  name='selectCountry' value={formData.selectCountry} >
                  <option>India</option>
                  <option>US</option>
                  <option>America</option>
                  <option>Nepal</option>
                  <option>Pakistan</option>
                </select>
              </div>

              <div className='flex gap-5'>
                <input onChange={handleChange}
                  className='border-[#d5d5d5] border rounded-md p-[13.5px] py-[11px] w-1/2 outline-sky-600 '
                  name='firstName' value={formData.firstName} type='text' placeholder='First Name (optional)' />
                <input onChange={handleChange}
                  required className='border-[#d5d5d5] border rounded-md p-[13.5px] py-[11px] w-1/2 outline-sky-600'
                  name='lastName' value={formData.lastName} type='text' placeholder='last Name' />
              </div>

              <div className='flex items-center relative '>
                <input onChange={handleChange}
                  required className='border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] '
                  name='address' value={formData.address} type='text' placeholder='Address' />
                <div className='absolute right-3'><CiSearch /></div>
              </div>

              <div>
                <div onClick={() => { setToHide(true) }} className={`${toHide ? 'hidden' : 'visible'} text-[#1990c6] hover:text-[#20aceb] pl-1 text-[15px]`}>+ Add apartment, suit, etc.</div>
                <input onChange={handleChange}
                  className={`${toHide ? 'visible' : 'hidden'} border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] `}
                  value={formData.apartment} type='text' placeholder='Apartment, suit, etc. (optional)' />
              </div>

              <div className='flex gap-5'>
                <input onChange={handleChange}
                  required className='border-[#d5d5d5] rounded-md border p-[13.5px] py-[11px] w-1/2 outline-sky-600 '
                  name='postalCode' value={formData.postalCode} type='text' placeholder='Postal Code' />
                <input onChange={handleChange}
                  required className='border-[#d5d5d5] rounded-md border p-[13.5px] py-[11px] w-1/2 outline-sky-600'
                  name='city' value={formData.city} type='text' placeholder='City' />
              </div>

              <div className='flex gap-2 items-center text-[14px]'>
                <input onChange={handleChange}
                  className='border-[#d5d5d5]'
                  name='checkBoxSave' checked={formData.checkBoxSave} type='checkBox' id='checkBoxSave' />
                <label htmlFor='checkBoxSave'>Save this information for next time</label>
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-[17px] font-medium'>Shipping method</h3>
                <p className='p-[17px] bg-[#f6f6f6] text-[#0000008f] text-[14px] '>Enter your shipping address to view available shipping methods.</p>
              </div>

              <div>
                <h2 className='text-[24px] font-semibold'>Payment</h2>
                <p className='p-[14px] text-[#0000008f]'>All transactions are secure and encrypted.</p>
              </div>
              <div>
                <div className='p-[17px] border border-sky-600 flex justify-between rounded-tl-md rounded-tr-md bg-[#f0f7ff]'>
                  <p>Credit card</p>
                  <img src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/f9cb6714da64e73281df.svg' alt='Not Found' />
                </div>

                <div className='p-[17px] bg-[#0000000B] border flex flex-col gap-4'>
                  <div className='flex items-center relative '>
                    <input onChange={handleChange}
                      required className='border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] '
                      name='cardNumber' value={formData.cardNumber} type='text' placeholder='Card number' />
                    <div className='absolute right-3'><IoLockClosedOutline className='text-[grey]' /></div>
                  </div>
                  <div className='flex gap-5'>
                    <input onChange={handleChange}
                      required className='border-[#d5d5d5] rounded-md border p-[13.5px] py-[11px] w-1/2 outline-sky-600 '
                      name='expDate' value={formData.expDate} type='text' placeholder='Expiration date (MM/YY)' />
                    <div className='flex items-center relative w-1/2 '>
                      <input onChange={handleChange}
                        required className='border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] '
                        name='securityCode' value={formData.securityCode} type='text' placeholder='Security code' />
                      <div className='absolute right-3'><AiOutlineQuestionCircle className='text-[grey]' /></div>
                    </div>
                  </div>
                  <input onChange={handleChange}
                    className='border-[#d5d5d5] border p-[13.5px] py-[11px] rounded-md outline-sky-600'
                    name='cardName' value={formData.cardName} type='text' placeholder='Name on card' />
                  <div className='flex gap-2 items-center text-[14px]'>
                    <input onChange={handleChange}
                      className='border-[#d5d5d5]'
                      name='billingBox' checked={formData.billingBox} type='checkBox' id='shippingAsBilling' />
                    <label htmlFor='shippingAsBilling'>Use shipping address as billing address</label>
                  </div>
                  <div className='flex gap-3 flex-col h-0 overflow-hidden'>
                    <h2 className='text-[17px] font-medium'>Billing address</h2>
                    <div className='relative'>
                      <label className='absolute text-[grey] text-[13px] pl-[15px] pt-[9px]'>Country/Region</label>
                      <select onChange={handleChange}
                        required className='border-[#d5d5d5]  border rounded-md pt-[21px] pr-[30px] pl-[11px] pb-[11px] outline-sky-600 w-full'
                        name='billingCountry' value={formData.billingCountry} >
                        <option>India</option>
                        <option>US</option>
                        <option>America</option>
                        <option>Nepal</option>
                        <option>Pakistan</option>
                      </select>
                    </div>

                    <div className='flex gap-5'>
                      <input onChange={handleChange}
                        className='border-[#d5d5d5] border rounded-md p-[13.5px] py-[11px] w-1/2 outline-sky-600 '
                        name='billingFirstName' value={formData.billingFirstName} type='text' placeholder='First Name (optional)' />
                      <input onChange={handleChange}
                        className='border-[#d5d5d5] border rounded-md p-[13.5px] py-[11px] w-1/2 outline-sky-600'
                        name='billingLastName' value={formData.billingLastName} type='text' placeholder='last Name' />
                    </div>

                    <div className='flex items-center relative '>
                      <input onChange={handleChange}
                        className='border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] '
                        name='billingAddress' value={formData.billingAddress} type='text' placeholder='Address' />
                      <div className='absolute right-3'><CiSearch /></div>
                    </div>

                    <input onChange={handleChange}
                      className='border-[#d5d5d5] rounded-md border w-full outline-sky-600 p-[13.5px] py-[11px] '
                      name='billingApartment' value={formData.billingApartment} type='text' placeholder='Apartment, suit, etc. (optional)' />

                    <div className='flex gap-5'>
                      <input onChange={handleChange}
                        className='border-[#d5d5d5] rounded-md border p-[13.5px] py-[11px] w-1/2 outline-sky-600 '
                        name='billingPostalCode' value={formData.billingPostalCode} type='text' placeholder='Postal Code' />
                      <input onChange={handleChange}
                        className='border-[#d5d5d5] rounded-md border p-[13.5px] py-[11px] w-1/2 outline-sky-600'
                        name='billingCity' value={formData.billingCity} type='text' placeholder='City' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <button className='w-full p-[15.8px] text-white rounded-md bg-sky-500' onSubmit={handleSubmit}>Pay now</button>
              </div>

            </div>
          </form>
          <div className='p-[21px] border-t w-[100%] border-r text[#0000008F] text-xs '><p className=' pl-[130px]'>All rights reserved Fashionopolism Galleria</p></div>

        </div>
        <div className=' w-[40%] p-[42px] flex flex-col gap-6 '>
          <div>
            {initialState.map((item, index) => {
              return (
                <div key={index} className='relative py-[10px] flex items-center '>
                  <div className=' w-[64px] h-[64px] border bg-[#f6f6f6] overflow-hidden '>
                    <img src={item.dataToShow?.images[0]?.src} className=' bg-no-repeat w-[100%] h-[100%]  ' alt='Not Found' />
                    <p className='absolute left-12 top-0 text-[12px] bg-[#0000008f] text-white rounded-full px-[7px]  '>{item.quantity}</p>
                  </div>
                  <div className='flex justify-between w-full'>
                    <p className='pl-[14px] text-sm'>{item.dataToShow.title}</p>
                    <p className='pl-[14px] text-sm'>${item.dataToShow?.variants[0]?.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <p className='text-sm'>Subtotal</p>
              <p className='text-sm'>${subTotal}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm'>Shipping</p>
              <p className='text-[12px] text-[#0000008f] '>Enter shipping address</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[17px]'>Total</p>
              <p className='text-[17px]'>${subTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOutPage