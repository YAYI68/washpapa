import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { IoBus } from "react-icons/io5";
import { VscNotebook } from "react-icons/vsc";

import Main from './Main'



function WashDetail() {
  const [errorMessage,setErrorMessage] = useState("")
  const [ validate, setValidate] = useState("")
  const phoneRef = useRef();
  const busRef = useRef();
  const noteRef = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const handleBlur = ()=>{}


  return (
    <section className='h-[80vh] w-full flex flex-col items-center justify-center '>
       {/* { errorMessage &&    
       <p className='text-white w-[30%] bg-red-600 mb-[1rem] p-2'>{errorMessage}</p>
       } */}
       <div className='w-[30%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
        <div className='w-full h-full flex flex-col gap-2 '>
           <p className='text-light-blue text-[1.1rem]'>Please fill in regular delivery details to complete the order</p>
           <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="email" className='ml-2'>Phone Number</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   </div>
                   <input onBlur={handleBlur}  type="text" id="email" ref={phoneRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="Phone Number" />
                   </div>
                 {validate &&    
                    <small className='text-red-500 ml-4'>{validate} *</small>
                 }
              </div>
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="bus_stop" className='ml-2'>Nearest Bus-Stop</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <IoBus className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                   </div>
                   <input onBlur={handleBlur}  type="text" id="bus_stop" ref={busRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nearest Bus-stop" />
                   </div>
                 {validate &&    
                    <small className='text-red-500 ml-4'>{validate} *</small>
                 }
              </div>
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="note" className='ml-2'>Additional Notes (Optional)</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <VscNotebook className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                   </div>
                   <textarea onBlur={handleBlur}  type="text" id="note" ref={noteRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="Additional notes" />
                   </div>
                 {validate &&    
                    <small className='text-red-500 ml-4'>{validate} *</small>
                 }
              </div>
              <p className='text-light-blue text-[1rem]'>Please kindly take a picture of the items to be washed. Our personel will do the same when he/she arrives</p>
               <div className='my-2 self-start'>
                 <input type="checkbox" name="" value="" id='picture' />
                 <label htmlFor="picture">Picture taken</label>
               </div>
              <button type="submit" className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Continue</button>
           </form>
        </div>
       </div>
    </section>
  )
}

export default WashDetail