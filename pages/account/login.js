import React, { useState, useRef, useEffect } from 'react';
import Main from '../../components/Main'
import Link from 'next/link';
import { logIn } from '../../db/auth';
import { useStateContext } from '../../context/ContextProvider';
import { useRouter } from 'next/router';
import { Spinner } from '../../components/Spinner';
import { authvalidator } from '../../utils/validator';




const Login = () => {
  const router =  useRouter()
  const [ isLoading , setIsLoading ] = useState(false)
  const {saveLocalUser } =  useStateContext();
  const [ message, setMessage] = useState({error:"",success:""})
  const [showPassword, setShowPassword] = useState(false)
  const [ validate, setValidate] = useState("")
   const emailRef = useRef()
   const passwordRef = useRef()
    
  
 const handleSubmit = async(e)=>{
   e.preventDefault();
   setIsLoading(true)

   const email = emailRef.current.value;
   const password = passwordRef.current.value;
    const result =  await logIn({email, password})
    authvalidator(result,setMessage)
    if(result.user){
      localStorage.setItem('userInfo',JSON.stringify(result.user))
      saveLocalUser(result.user)
      setTimeout(()=>{
                  router.push("/wash")
               },200)
    }
  setIsLoading(result.loading)
 }


   const handleBlur = ()=>{
      if(emailRef.current.value === ""){
         setValidate( "Required") 
         console.log("Blurred email")
      }
      else if (emailRef.current.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRef.current.value)){
         console.log(emailRef.current.value);
         setValidate('Invalid email address')  
      }
     
   }

  return (
    <Main className=' mt-[5rem]'>
        <section className='h-[80vh] w-full flex flex-col items-center justify-center  '>
           { message.error ?    
           <p className={`text-white w-[30%] bg-red-600 mb-[1rem] p-2`}>{message.error}</p>
           :""
           }
             { message.success? 
           <p className='text-white w-[30%] bg-green-500 mb-[1rem] p-2'>{ message.success}</p>
           :""
         }
           <div className='w-[30%] lg:w-[50%] md:w-[80%] bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4 animate-top'>
            <div className='w-full h-full flex flex-col gap-2 items-center'>
               <h4 className='text-light-blue text-[2rem]'>Sign in</h4>
               <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">
                  <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor="email" className='ml-2'>Email address</label>
                  <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg ariaHidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                       </div>
                       <input onBlur={handleBlur}  type="text" id="email" ref={emailRef} className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                       </div>
                     {validate &&    
                        <small className='text-red-500 ml-4'>{validate} *</small>
                     }
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                   <label htmlFor="email" className='ml-2'>Password</label>
                  </div>
                  <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        </div>
                        <input  type={showPassword?"text":"password"} ref={passwordRef} id="input-group-1" className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
                        {showPassword ?  
                        <div onClick={()=>setShowPassword(false)} className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-auto cursor-pointer">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>                        
                        </div>
                        :
                        <div onClick={()=>setShowPassword(true)} className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-auto cursor-pointer">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                        </div>
                    }
                  </div>
                  <button type="submit" className='bg-light-blue flex items-center justify-center gap-5 text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>
                    <span>Sign in</span>
                    {isLoading? 
                    <Spinner />
                    :""
                  }
                   </button>
               </form>
               <div className='flex  justify-between w-full'> 
               <small className='self-start'>Dont have an account? <Link href='/account/register' >
                  <a className='text-blue-500 hover:underline'>Register</a> 
                </Link>
                </small>
                <Link href='forget_password' target='_blank'>
                  <a className='text-blue-500 hover:underline'><small> Forget Password</small></a></Link>
               </div>
            </div>
           </div>
        </section>
    </Main>
  )
}

export default Login

