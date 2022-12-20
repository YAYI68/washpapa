import React, { useRef, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import Main from '../../components/Main';

const Contact = () => {
    const [errorMessage,setErrorMessage] = useState("")
    const [ validate, setValidate] = useState({
      phoneRequired:"",
      busRequired:"",
    })
    const nameRef = useRef();
    const complaintTitleRef = useRef();
    const complaintNoteRef = useRef();
  
    if(errorMessage){
      setTimeout(() => {
        setErrorMessage("")
      }, 10000);
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      const fullName = nameRef.current.value;
      const complaintTitle = complaintTitleRef.current.value;
      const complaintNote= complaintNoteRef.current.value;
  
      if(fullName === ""){
        setErrorMessage("Please fill in your  name ")
      }
      if(complaintTitle === ""){
        setErrorMessage("Please fill in your complaint title ")
      }
      if(complaintNote === ""){
        setErrorMessage("Please fill in your complaint note ")
      }
  
  
    }

    const nameBlur = ()=>{
      if(nameRef.current.value === ""){
         setValidate({...validate,nameRequired:"Required"}) 
      }
     
   }
  
   const titleBlur = ()=>{
    if( complaintTitleRef.current.value === ""){
        setValidate({...validate,titleRequired:"Required"}) 
      }
   }

   const complaintBlur = ()=>{
    if( complaintNoteRef.current.value === ""){
        setValidate({...validate,noteRequired:"Required"}) 
      }
   }
  
  return (
    <Main className="mt-[5rem] flex flex-col items-center justify-center">
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
    {errorMessage&& 
     <div className='flex items-center w-[30%] p-4 absolute right-4 top-4 bg-red-600 mb-[1rem]'>
      <button onClick={()=>setErrorMessage("")} type="" className='h-6 w-6 '><FaTimes className='fill-white'/> </button> <p className='text-white   p-2 '>{errorMessage}</p>
     </div>
    }
     
     
     <div className='w-[30%] lg:w-[50%] md:w-[75%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
      <div className='w-full h-full flex flex-col gap-2 '>
         <p className='text-light-blue text-[1.5rem] text-center font-semibold'>Help and Support</p>
         <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">
            <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="full_name" className='ml-2'>Full Name</label>
            <div className="relative">
                 <input onBlur={nameBlur}  type="text" id="full_name" ref={nameRef} 
                 className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 placeholder="Full Name" required/>
                 </div>
               {validate.nameRequired &&    
                  <small className='text-red-500 ml-4'>{validate.nameRequired} *</small>
               }
            </div>
            <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="bus_stop" className='ml-2'>Complaint Title</label>
            <div className="relative">
                 <input onBlur={titleBlur}  type="text" id="bus_stop" ref={complaintTitleRef} 
                 className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Complaint title" required/>
                 </div>
               {validate.titleRequired &&    
                  <small className='text-red-500 ml-4'>{validate.titleRequired} *</small>
               }
            </div>
            <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="note" className='ml-2'>Describe your complaint</label>
            <div className="relative">
                 <textarea  onBlur={complaintBlur} type="text" id="note" ref={complaintNoteRef} 
                 className="bg-gray-50 border h-full focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 placeholder="Additional notes" />
                 </div>
                 {validate.noteRequired &&    
                  <small className='text-red-500 ml-4'>{validate.noteRequired} *</small>
               }
            </div>
            <button type="submit" className='bg-light-blue mt-4 text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Report</button>
         </form>
      </div>
     </div>
  </section>
    </Main>
  )
}

export default Contact