import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from "react-icons/md"


function Navbar() {
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
  return (
    <nav className='h-[10vh] dark:bg-slate-900 bg-white flex items-center justify-end px-[4rem] w-screen fixed z-20 top-0 left-0'>
      <div className='w-[100%] flex items-center justify-between'>
       <Link href="/">
        <a className='text-[2rem] font-semibold  text-light-blue w-fit'> washpapa </a>
        </Link>
      <div className='items-center flex justify-around w-[60%]'>  
       <ul className='list-none flex items-center gap-8 '>
         <li className='w-fit'> 
          <Link href="" >
             <a className='font-medium  block dark:text-white w-full hover:text-light-blue'>About</a> 
          </Link>
          </li>
         <li> <Link href="">
         <a className='font-medium block dark:text-white w-full hover:text-light-blue'>Services</a> 
          </Link></li>
         <li>
          <Link href="" >
            <a className='font-medium  block dark:text-white w-full hover:text-light-blue'>Contact Us</a> 
          </Link>
          </li>
         <li> 
          <Link href="/account/login">
         <a className='font-medium  block dark:text-white w-full   px-2 py-2 rounded-md bg-light-blue text-white'>Get Started</a> 
          </Link>
          </li>
       </ul>
       <div className='relative'>
        
        <button onClick={()=>setModeDropdown(!modeDropdown)} type="">
        {theme === "dark" ?
        <MdDarkMode className={`fill-light-blue`} />
        :<MdLightMode className={`fill-light-blue`} />
         }
        </button>
      
       {modeDropdown && 
        <ul className='absolute z-10 top-[100%] translate-x-[-2rem] border-2 w-fit bg-white dark:bg-black shadow-xl rounded-md py-1'>
          <li onClick={()=>toggleMode('dark')} className={`flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-gray-100 rounded-sm`}><MdDarkMode className={`${theme === 'dark' &&  'fill-light-blue' }`} /><span className={`${theme === 'dark' &&  'text-light-blue' }`}>Dark</span></li>
          <li onClick={()=>toggleMode('light')} className='flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-gray-100 rounded-sm'><MdLightMode className={`${theme === 'light' &&  'fill-light-blue' }`} /><span  className={`${theme === 'light' &&  'text-light-blue' }`}>Light</span></li>
        </ul>
       }
       </div>
      </div>
      </div>  
    </nav>
  )
}

export default Navbar