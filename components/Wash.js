
import { useState } from 'react';
import { IoCaretDownCircle } from "react-icons/io5";
import { currentDate, generateId } from '../utils/order';
import { useStateContext } from '../context/ContextProvider';
import { useRouter } from 'next/router';


function Wash({service,tab,toggleTab,tabNum}) {
  const {Order,saveOrder,userInfo} =  useStateContext();
  const [ drop, setDrop ] = useState(false)

  const router =  useRouter()

  const status = tabNum === tab && drop ? "active" :"inactive" 

  const submit = async()=>{
    const date = currentDate()
    const orderId = generateId(userInfo.email)

   saveOrder({
      ...Order,
       buyerEmail: userInfo.email,
       buyerID: userInfo.uid,
       category:service.category,
       complete:false,
       orderID: orderId,
       typeOfWash: service.name,
       dryClean: service.isDryCleaning,
       price: service.TotalCost,
       date: date,
    });
    if(orderId){
        router.push(`/wash/${service.category}/${orderId}`)
      }
  }
  
  const dropDown=(tab)=>{
        toggleTab(tab)
        setDrop(!drop)
  }
    

  return (
    <div className=' w-full lg:flex-col lg:items-center flex p-4 gap-4 '   >
        <div onClick={()=>dropDown(tab)} className={`w-[47%] sm:w-full lg:w-[80%] md:w-[95%]  h-[7rem] cursor-pointer  dark:text-white rounded-md border border-l-4 ${status === "active"  ? 'bg-light-blue text-white border-l-black' :'' }  border-l-light-blue p-4 flex justify-between flex-col`}>
          <div  className='flex justify-between items-center '>
            <p className='text-[1.5rem] md:text-[1.1rem] font-semibold'>{service.name}</p>
            <button type="button" className='w-6 h-6 flex items-center justify-center'><IoCaretDownCircle  className={` ${status === "active"  ? 'fill-white' :'fill-light-blue' } h-full w-full`}/></button>
          </div>
          <div className='flex justify-between items-center'>
            <p className={`${status ==="active" ? 'text-black' :'' } text-blue-200 md:text-[.8rem] font-semibold dark:text-slate-300`}>{service.isDryCleaning && 'DRY CLEANING'} </p>
            <p className='font-semibold place-items-end text-right md:text-[1rem]'>NGN {service.cost}</p>
          </div>       
        </div>
        <div  className={`w-[47%] lg:w-[80%] sm:w-full lg:right-0 lg:top-0  rounded-md border absolute lg:static right-5 top-6 ${status === "active"  ? 'translate-y-0 transition-[transform]' :'hidden -translate-y-[100%]' } transition-[transform] `}>
          <p className='shadow-md w-full p-4 text-center rounded text-light-blue text-[1.2rem] sm:text-[1rem] font-semibold'>{service.name}</p>
         <div className='w-full p-2 dark:text-white'>
         <div  className=' p-2 border-b '>
            <p className='text-[1.2rem] md:text-[1.1rem] font-medium'>Details</p>
            <p className='dark:text-slate-300'>{service.details}</p>
          </div>
          <div className='p-2 border-b '>
          <p className='text-[1.2rem] md:text-[1.1rem] font-medium'>Quantity</p>
          <p className='dark:text-slate-300'>{service.quantity}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] md:text-[1.1rem] font-medium'>Return Time</p>
          <p className='dark:text-slate-300'>{service.period}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] md:text-[1.1rem] font-medium'>Total Delivery Fee</p>
          <p className='dark:text-slate-300'>NGN {service.DeliveryFee}</p>
        </div>
        <div className='p-2 border-b '>
          <p className='text-[1.2rem] md:text-[1.1rem] font-medium'>Total Cost</p>
          <p className='dark:text-slate-300'>NGN {service.TotalCost}</p>
        </div>
            <button onClick={submit} className='w-full block p-2 text-center bg-light-blue mt-4 text-white font-medium text-[1.1rem]'>Continue</button> 
         </div>
        </div>
       
    </div>
  )
}

export default Wash