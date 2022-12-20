import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {IoCaretForwardCircleSharp, IoCaretDownCircle } from "react-icons/io5";
import { logOut } from '../db/auth';
import { useStateContext } from '../context/ContextProvider';
import { useRouter } from 'next/router';


function Navbar() {
  const router = useRouter();
  const [ isLogin, setIsLogin ] = useState(true) 
  const { userInfo } = useStateContext();
  const [ accountDropdown, setAccountDropdown ] = useState(false)
  const [ modeDropdown, setModeDropdown ] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleMode = (mode)=>{
    setTheme(mode);
     setModeDropdown(false);
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
   
  const logUserOut = ()=>{
    setAccountDropdown(false)
    logOut()
    router.push("/account/login")
  }


  return (
    <nav className='lg:hidden h-[10vh] dark:bg-slate-900 bg-white flex items-center justify-end px-[4rem] w-screen fixed z-20 top-0 left-0'>
      <div className='w-[100%] flex items-center justify-between'>
       <Link href="/">
        <a className='text-[2rem] font-semibold  text-light-blue w-fit'> washpapa </a>
        </Link>
      <div className='items-center flex justify-around w-[60%]'>  
       <ul className='list-none flex items-center gap-8 '>
         <li className='w-fit'> 
          <Link href="/wash" >
             <a className='font-semibold  block dark:text-white w-full hover:text-light-blue dark:hover:text-light-blue'>Wash</a> 
          </Link>
          </li>
         <li> <Link href="">
         <a className='font-semibold block dark:text-white w-full hover:text-light-blue dark:hover:text-light-blue'>About</a> 
          </Link></li>
         <li>
          <Link href="/contact" >
            <a className='font-semibold  block dark:text-white w-full hover:text-light-blue dark:hover:text-light-blue'>Contact Us</a> 
          </Link>
          </li>
          
         <li>
         {!userInfo ?
          <Link href="/account/login">
           <a className='font-medium  block dark:text-white w-full   px-2 py-2 rounded-md bg-light-blue text-white'>Get Started</a> 
          </Link>
          :
          <div className=' cursor-pointer relative'>
            <button type="button" className='flex items-center gap-4  border-2 p-2 rounded-md border-light-blue' onClick={() => setAccountDropdown(!accountDropdown)}>
              <p className="font-semibold text-light-blue">W{userInfo.balance}</p>
              <button type="button"> <IoCaretDownCircle className='fill-light-blue' /> </button>
            </button>
            {accountDropdown &&    
            <ul className='top-[110%] absolute bg-white dark:bg-black w-[15rem] border-2 border-light-blue dark:border-light-blue rounded-md py-1'>
              <li className=" rounded-sm">
                <Link href={`/order`}>
                  <a onClick={()=>setAccountDropdown(false)} className=' py-2 px-4 w-full block dark:hover:text-light-blue hover:text-light-blue dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300'>Orders</a>
                </Link>
              </li>
              <li className=" rounded-sm">
                <Link href={``}>
                  <a onClick={logUserOut} className=' py-2 px-4 w-full block dark:hover:text-light-blue hover:text-light-blue dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300'>Login with Another Account</a>
                </Link>
              </li>
              <li className="  rounded-sm">
                <Link href={`/account/reset_password`}>
                  <a onClick={()=>setAccountDropdown(false)} className=' py-2 px-4 w-full block dark:hover:text-light-blue hover:text-light-blue dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300'>Reset Password</a>
                </Link>
              </li>
              <li className="rounded-sm">
                  <button onClick={logUserOut} className=' py-2 px-4 w-full block dark:hover:text-light-blue hover:text-light-blue dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300'>Logout</button>                
              </li>
            </ul>
            }
          </div>
          }       
          </li>
       </ul>
       <div className='relative'>
        
        <button onClick={()=>setModeDropdown(!modeDropdown)} type="">
        {theme === "dark" ?
        <MdDarkMode className={`fill-light-blue h-6 w-6`} />
        :<MdLightMode className={`fill-light-blue h-6 w-6`} />
         }
        </button>
      
       {modeDropdown && 
        <ul className='absolute z-10 top-[100%] border-light-blue dark:border-light-blue translate-x-[-2rem] border-2 w-fit bg-white dark:bg-black shadow-xl rounded-md py-1'>
          <li onClick={()=>toggleMode('light')} className='flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300 rounded-sm'><MdLightMode className={`${theme === 'light' &&  'fill-light-blue' }`} /><span  className={`${theme === 'light' &&  'text-light-blue' }`}>Light</span></li>
          <li onClick={()=>toggleMode('dark')} className={`flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300 rounded-sm`}><MdDarkMode className={`${theme === 'dark' &&  'fill-light-blue' }`} /><span className={`${theme === 'dark' &&  'text-light-blue' }`}>Dark</span></li>
        </ul>
       }
       </div>
      </div>
      </div>  
    </nav>
  )
}

export default Navbar