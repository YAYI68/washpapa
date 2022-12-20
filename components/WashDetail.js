import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { IoBus } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { VscNotebook } from "react-icons/vsc";


import Main from './Main'
import { useStateContext } from '../context/ContextProvider';




function WashDetail({wash}) {
  const { Order ,setOrder } = useStateContext();
  const router = useRouter()
  const [errorMessage,setErrorMessage] = useState("")
  const [ validate, setValidate] = useState({
    phoneRequired:"",
    busRequired:"",
  })

  const phoneRef = useRef();
  const busRef = useRef();
  const noteRef = useRef();
  const pictureRef = useRef();

  if(errorMessage){
    setTimeout(() => {
      setErrorMessage("")
    }, 10000);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const phoneNumber = phoneRef.current.value;
    const busStop = busRef.current.value;
    const note = noteRef.current.value;
    const takePic = pictureRef.current.checked;

    if(phoneNumber === ""){
      setErrorMessage("Please fill in the phone number that will recieve the delivery")
    }
    if(busStop === ""){
      setErrorMessage("Please fill in the nearest bus-stop that will recieve the delivery")
    }
    if(!takePic){
      setErrorMessage("Please take the pictures of your items and click the box below to confirm consent")
    }

    if(phoneNumber && busStop && takePic){
      setOrder({
        ...Order,
        deliveryPhone:phoneNumber,
        nearestBusStop:busStop,
        notes:note,
     });
      router.push(`/wash/${Order.category}/${Order.orderID}/payment`)
    }

  }
  const phoneBlur = ()=>{
    if(phoneRef.current.value === ""){
       setValidate({...validate,phoneRequired:"Required"}) 
    }
    else if( typeof phoneRef.current.value === "string"){
      setValidate({...validate,phoneRequired:"Input a valid phone number"}) 
    }
 }

 const busBlur = ()=>{
  if( busRef.current.value === ""){
    setValidate({...validate,busRequired:"Required"}) 
  }

 }


  return (
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
      {errorMessage&& 
       <div className='flex items-center w-[30%]  p-4 absolute right-4 top-4 bg-red-600 mb-[1rem]'>
        <button onClick={()=>setErrorMessage("")} type="" className='h-6 w-6 '><FaTimes className='fill-white'/> </button> <p className='text-white   p-2 '>{errorMessage}</p>
       </div>
      }
       
       
       <div className='w-[30%] lg:w-[50%] md:w-[80%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
        <div className='w-full h-full flex flex-col gap-2 '>
           <p className='text-light-blue text-[1.1rem]'>Please fill in regular delivery details to complete the order</p>
           <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="phone" className='ml-2'>Phone Number</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   </div>
                   <input onBlur={phoneBlur}  type="tel" id="phone" ref={phoneRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="Phone Number" required/>
                   </div>
                 {validate.phoneRequired &&    
                    <small className='text-red-500 ml-4'>{validate.phoneRequired} *</small>
                 }
              </div>
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="bus_stop" className='ml-2'>Nearest Bus-Stop</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <IoBus className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                   </div>
                   <input onBlur={busBlur}  type="text" id="bus_stop" ref={busRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nearest Bus-stop" required/>
                   </div>
                 {validate.busRequired &&    
                    <small className='text-red-500 ml-4'>{validate.busRequired} *</small>
                 }
              </div>
              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="note" className='ml-2'>Additional Notes (Optional)</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <VscNotebook className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                   </div>
                   <textarea  type="text" id="note" ref={noteRef} 
                   className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="Additional notes" />
                   </div>
              </div>
              <p className='text-light-blue text-[1rem]'>Please kindly take a picture of the items to be washed. Our personel will do the same when he/she arrives</p>
               <div className='my-2 self-start flex items-center'>
                 <input type="checkbox" name="" value="" id='picture' className='mr-2' ref={pictureRef} />
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