import React from 'react';
import Link from 'next/link';
import { MdDarkMode, MdLightMode } from "react-icons/md"

function Navbar() {
  return (
    <nav className='h-[10vh] dark:bg-black flex items-center justify-end px-[4rem] w-screen'>
      <div className='w-[80%] flex items-center justify-around'>
      <h5 className='text-[1.5rem] font-semibold italic text-light-blue w-fit'>washpapa</h5>
      <div className='items-center flex justify-around w-[60%]'>  
       <ul className='list-none flex items-center gap-8 '>
         <li className='w-fit'> 
          <Link href="" >
             <a className='font-bold  block dark:text-white w-full hover:text-light-blue'>About</a> 
          </Link>
          </li>
         <li> <Link href="">
         <a className='font-bold block dark:text-white w-full hover:text-light-blue'>Services</a> 
          </Link></li>
         <li>
          <Link href="" >
            <a className='font-bold  block dark:text-white w-full hover:text-light-blue'>Contact Us</a> 
          </Link>
          </li>
         <li> 
          <Link href="">
         <a className='font-bold  block dark:text-white w-full   px-2 py-2 rounded-md bg-light-blue text-white'>Get Started</a> 
          </Link>
          </li>
       </ul>
       <div className='relative'>
       <button type=""><MdDarkMode className='fill-light-blue' /></button>
        <ul className='absolute top-[100%] translate-x-[-2rem] border-2 w-fit bg-white dark:bg-black shadow-xl rounded-md py-1'>
          <li className='flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold  hover:bg-gray-100 rounded-sm'><MdDarkMode className='fill-light-blue' /><span className='text-light-blue'>Dark</span></li>
          <li className='flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold hover:bg-gray-100 rounded-sm'><MdLightMode /><span>Light</span></li>
        </ul>
       </div>
      </div>
      </div>  
    </nav>
  )
}

export default Navbar