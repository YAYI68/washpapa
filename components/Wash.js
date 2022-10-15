import Link from 'next/link';
import React from 'react'
import {IoCaretForwardCircleSharp, IoCaretDownCircle } from "react-icons/io5";

function Wash({service,tab,toggleTab,tabNum}) {
  const service_slug = service.name ? service.name.replaceAll(" ", "_") :""

  return (
    <div className=' w-full flex p-4 gap-4 '   >
        <div onClick={()=>toggleTab(tab)} className={`w-[47%] h-[7rem] cursor-pointer  dark:text-white rounded-md border border-l-4 ${tabNum === tab ? 'bg-light-blue text-white border-l-black' :'' }  border-l-light-blue p-4 flex justify-between flex-col`}>
          <div  className='flex justify-between items-center'>
            <p className='text-[1.5rem] font-semibold'>{service.name}</p>
            <button type="button" className='w-6 h-6 flex items-center justify-center'><IoCaretDownCircle  className={`fill-light-blue ${tabNum === tab ? 'fill-white' :'' } h-full w-full`}/></button>
          </div>
          <div className='flex justify-between items-center'>
            <p className={`${tabNum === tab ? 'text-black' :'' } text-main-blue font-medium dark:text-slate-300`}>{service.isDryCleaning && 'DRY CLEANING'} </p>
            <p className='font-semibold place-items-end text-right'>NGN {service.cost}</p>
          </div>       
        </div>
        <div  className={`w-[47%]  rounded-md border absolute right-5 top-6 ${tabNum === tab ? 'translate-y-0' :'hidden -translate-y-[100%]' }  `}>
          <p className='shadow-md w-full p-4 text-center rounded text-light-blue text-[1.2rem] font-semibold'>{service.name}</p>
         <div className='w-full p-2 dark:text-white'>
         <div  className=' p-2 border-b '>
            <p className='text-[1.2rem] font-medium'>Details</p>
            <p className='dark:text-slate-300'>{service.details}</p>
          </div>
          <div className='p-2 border-b '>
          <p className='text-[1.2rem] font-medium'>Quantity</p>
          <p className='dark:text-slate-300'>{service.quantity}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] font-medium'>Return Time</p>
          <p className='dark:text-slate-300'>{service.period}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] font-medium'>Delivery Fee</p>
          <p className='dark:text-slate-300'>NGN {service.DeliveryFee}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] font-medium'>Quantity</p>
          <p className='dark:text-slate-300'>NGN {service.TotalCost}</p>
        </div>
          <Link href={`/wash/${service.typeofWash}/${service.name }`} >
            <a className='w-full block p-2 text-center bg-light-blue mt-4 text-white font-medium text-[1.1rem]'>Continue</a> 
            </Link>
         </div>
        </div>
       
    </div>
  )
}

export default Wash