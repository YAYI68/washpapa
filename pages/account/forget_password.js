import React, { useState } from 'react';
import { Formik } from 'formik';
import Main from '../../components/Main'
import Link from 'next/link';

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
   
  return (
    <Main className='dark:bg-black bg-white mt-[5rem]'>
        <section className='h-[80vh] w-full flex flex-col items-center justify-center '>
           <div className='w-[30%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
            <div className='w-full h-full flex flex-col gap-5 items-center'>
               <h4 className='text-light-blue text-[2rem] '>Reset Password</h4>
               <form onSubmit={``} className="w-full flex flex-col items-center gap-2">
                  <div className='flex flex-col gap-1 w-full'>
                    <p className='ml-2'>Email address</p>
                  <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                       </div>
                       <input type="text" id="input-group-1" className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                       </div>
                    <small className='text-red-500 ml-4'>Required *</small>
                  </div>
                  
                  <button type="submit" className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Reset password</button>
               </form>
               {/* <div className='flex  justify-between w-full'> 
               <small className='self-start'>Don't have an account? <Link href='/account/login' >
                  <a className='text-blue-500 hover:underline'>Sign in</a> 
                </Link>
                </small>
               </div> */}
            </div>
           </div>
        </section>
    </Main>
  )
}

export default ForgetPassword