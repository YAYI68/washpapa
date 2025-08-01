import React, { useState, useRef, Fragment } from 'react';
import Main from '../../components/Main'
import { forgetPasswordReset } from '../../db/auth';
import { authvalidator } from '../../utils/validator';
import { Spinner } from '../../components/Spinner';
import Head from 'next/head';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
  const [ isLoading , setIsLoading ] = useState(false)
  const [ validate, setValidate] = useState({email:"",password:""})
  const emailRef = useRef()

  const emailBlur = ()=>{
    if(emailRef.current.value === ""){
       setValidate({email:"Required"}) 
    }
    else if (emailRef.current.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRef.current.value)){
       console.log(emailRef.current.value);
       setValidate({email:'Invalid email address'})  
    }  
 }

 const handleEmailSubmit = async(e)=>{
       e.preventDefault();
       setIsLoading(true)
      const email = emailRef.current.value
      const result = await forgetPasswordReset(email)
       authvalidator(result,toast)
       setIsLoading(false)
 }
   
  return (
    <Fragment>
        <Head>
         <title className="font-avant">anywash/password</title>
        </Head>
     <Main className=' mt-[5rem]'>
        <section className='h-[80vh] w-full flex flex-col items-center justify-center '>

           <div className='w-[30%] lg:w-[50%] md:w-[80%] bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4 animate-top'>
            <div className='w-full h-full flex flex-col gap-5 items-center'>
               <h4 className='text-light-blue text-[2rem] '>Forget Password</h4>
               <form onSubmit={handleEmailSubmit} className="w-full flex flex-col items-center gap-2">
                  <div className='flex flex-col gap-1 w-full'>
                    <label className='ml-2' htmlFor="email">Email address</label>
                  <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                       </div>
                       <input ref={emailRef} type="text" id="email" onBlur={emailBlur} className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                       </div>
                      {validate.email &&    
                        <small className='text-red-500 ml-4'>{validate.email} *</small>
                      } 
                  </div> 
                  <button type="submit" className='bg-light-blue mt-[1rem] flex items-center justify-center gap-5 text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>
                   <span> Reset password</span>
                  {isLoading ? 
                    <Spinner />
                    :""
                  }
                   </button>
               </form>
            </div>
           </div>
        </section>
    </Main>
    </Fragment>
    
  )
}



export default ForgetPassword