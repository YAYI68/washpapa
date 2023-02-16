
import Head from 'next/head';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Main from '../../components/Main'
import { useStateContext } from '../../context/ContextProvider';
import { resetPassword } from '../../db/auth';
import { authvalidator } from '../../utils/validator';


function ResetPassword() {
    const [ isLoading , setIsLoading ] = useState(false)
    const [ validate, setValidate] = useState({email:"",password:""})
    const [ message, setMessage] = useState({error:"",success:""})
    const  passwordRef = useRef();


    const handleSubmit = async (e)=>{
             e.preventDefault();
             setIsLoading(true)
           const  newPassword = passwordRef.current.value;
            const result = await resetPassword(newPassword)
            authvalidator(result,setMessage)
            setIsLoading(result.loading)
             
    }

    const passwordBlur = ()=>{
        if(passwordRef.current.value === ""){
           setValidate({password:"Required"}) 
        }
        else if (passwordRef.current.value.trim() < 7){
           setValidate({password:"Password should be at least 7 characters"})
        }
      }

  return (
    <Fragment>
       <Head>
         <title className="font-avant">anywash/password</title>
        </Head>
        <Main className=' mt-[5rem]'>
    <section className='h-[80vh] w-full flex flex-col items-center justify-center '>
    { message.error ?    
           <p className={`text-white w-[30%] bg-red-600 mb-[1rem] p-2`}>{message.error}</p>
           :""
           }
             { message.success? 
           <p className='text-white w-[30%] bg-green-500 mb-[1rem] p-2'>{ message.success}</p>
           :""
         }
       <div className='w-[30%] lg:w-[50%] md:w-[80%] bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4 animate-top'>
        <div className='w-full h-full flex flex-col gap-5 items-center'>
           <h4 className='text-light-blue text-[2rem] '>Reset Password</h4>
           <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">
              <div className='flex flex-col gap-1 w-full'>
                <label className='ml-2' htmlFor="email">New Password</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>                  
                   </div>
                   <input ref={passwordRef} type="text" id="email" onBlur={passwordBlur}
                    className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Set new Password" />
                   </div>
                  {validate.password &&    
                    <small className='text-red-500 ml-4'>{validate.password} *</small>
                  } 
              </div>
              <button type="submit" className='bg-light-blue mt-[1rem] text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Reset password</button>
           </form>
        </div>
       </div>
    </section>
    </Main>
    </Fragment>
    
  )
}

export default ResetPassword