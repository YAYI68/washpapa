
import React from 'react'
import Main from '../../components/Main'


function ResetPassword() {
    const [ validate, setValidate] = useState({email:"",password:""})
    const passwordBlur = ()=>{
        if(passwordRef.current.value === ""){
           setValidate({password:"Required"}) 
        }
        else if (passwordRef.current.value.trim() < 7){
           setValidate({password:"Password should be at least 7 characters"})
        }
      }

  return (
    <Main className=' mt-[5rem]'>
    <section className='h-[80vh] w-full flex flex-col items-center justify-center '>
       {/* New Password Reset */}
       <div className='w-[30%] bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
        <div className='w-full h-full flex flex-col gap-5 items-center'>
           <h4 className='text-light-blue text-[2rem] '>Reset Password</h4>
           <form onSubmit={``} className="w-full flex flex-col items-center gap-2">
              <div className='flex flex-col gap-1 w-full'>
                <label className='ml-2' htmlFor="email">New Password</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>                  
                   </div>
                   <input ref={passwordRef} type="text" id="email" onBlur={passwordBlur}
                     className="bg-gray-50 border focus:outline-light-blue border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Set new Password" />
                   </div>
                  {validate.password &&    
                    <small className='text-red-500 ml-4'>{validate.password} *</small>
                  } 
              </div>  
              <div className='flex flex-col gap-1 w-full'>
                <label className='ml-2' htmlFor="email">New Password</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>                  
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
  )
}

export default ResetPassword