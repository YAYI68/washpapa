import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoCaretDownCircle } from "react-icons/io5";
import { FaBars,FaTimes } from "react-icons/fa";
import { logOut } from '../db/auth';
import { useStateContext } from '../context/ContextProvider';
import { useRouter } from 'next/router';


function Navbar() {
  const router = useRouter();
  const { userInfo,setUserInfo } = useStateContext();
  const [ accountDropdown, setAccountDropdown ] = useState(false)
  const [ modeDropdown, setModeDropdown ] = useState(false)
  const [ slideIn, setSlideIn  ] = useState(false)
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
    setSlideIn(false)
    setUserInfo("")
    logOut()
    window.location.reload()
  }


  return (
    <nav className='h-[10vh] dark:bg-slate-900 bg-white  px-[4rem] lg:p-0  w-screen fixed z-20 top-0 left-0'>
      <div className='flex lg:hidden items-center justify-center h-full w-full'>
      <div className='w-[86%] flex items-center justify-between'>
       <Link href="/">
        <a className='text-[2rem] font-semibold  text-light-blue w-fit font-quicksand'> anywash </a>
        </Link>
      <div className='items-center flex justify-around w-[60%]'>  
       <ul className='list-none flex items-center gap-8 '>
         <li className='w-fit'> 
          <Link href="/" >
             <a className='font-semibold  block dark:text-white w-full hover:text-light-blue dark:hover:text-light-blue'>Home</a> 
          </Link>
          </li>
          <li className='w-fit'> 
          <Link href="/wash" >
             <a className='font-semibold  block dark:text-white w-full hover:text-light-blue dark:hover:text-light-blue'>Wash</a> 
          </Link>
          </li>
         <li> <Link href="/about">
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
              <p className="font-semibold text-light-blue">W {userInfo.balance}</p>
              <IoCaretDownCircle className='fill-light-blue' /> 
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
      </div>  
      <div className={`  items-center w-full h-full hidden lg:flex`}>
        <div className="p-[.5rem] h-full w-full relative flex  justify-between items-center">
        <div className='relative'>
            <button onClick={()=>setModeDropdown(!modeDropdown)} type="">
        {theme === "dark" ?
        <MdDarkMode className={`fill-light-blue h-6 w-6`} />
        :<MdLightMode className={`fill-light-blue h-6 w-6`} />
         }
            </button>
         {modeDropdown && 
          <ul className='absolute z-10 top-[100%] border-light-blue dark:border-light-blue translate-x-0 border-2 w-fit bg-white dark:bg-black shadow-xl rounded-md py-1'>
           <li onClick={()=>toggleMode('light')} className='flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300 rounded-sm'><MdLightMode className={`${theme === 'light' &&  'fill-light-blue' }`} /><span  className={`${theme === 'light' &&  'text-light-blue' }`}>Light</span></li>
          <li onClick={()=>toggleMode('dark')} className={`flex items-center cursor-pointer py-2 px-4 dark:text-white gap-2 font-semibold dark:hover:bg-slate-800  hover:bg-slate-300 rounded-sm`}><MdDarkMode className={`${theme === 'dark' &&  'fill-light-blue' }`} /><span className={`${theme === 'dark' &&  'text-light-blue' }`}>Dark</span></li>
         </ul>
       }
        </div>
          <Link href={'/'}>
            <h2 className='text-[1.5rem] font-semibold  text-light-blue w-fit font-quicksand'>anywash</h2>
          </Link>
          <div className=' flex items-center gap-5 '>
          
           {!slideIn ? 
            <button type="button" onClick={()=>setSlideIn(true)}>
             <FaBars className='fill-light-blue h-7 w-7'  />
           </button>
           :
           <button onClick={()=>setSlideIn(false)}>
            <FaTimes className='fill-light-blue h-7 w-7'/>
           </button>
          }
          </div>
          <div className={`w-full h-screen absolute top-[100%] ${slideIn?'block':'hidden'}`} onClick={()=>setSlideIn(false)}></div>
          <div className={`absolute top-[100%] right-0  w-full bg-white dark:bg-black transition-[transform]  ${slideIn?'translate-x-0':'translate-x-[100%]'}`}>
               <div className='w-full h-full p-[1rem]'>
                 <ul className='list-none w-full'>
                   <li className='w-full my-[.5rem]'>
                      <Link href={`/`}>
                       <a onClick={()=>setSlideIn(false)} className='p-[.5rem] font-semibold text-[1.3rem] w-full hover:bg-light-blue hover:text-white block'>Home</a> 
                       </Link>
                    </li>
                    <li className='w-full my-[.5rem]'>
                      <Link href={`/wash`}>
                       <a onClick={()=>setSlideIn(false)} className='p-[.5rem] font-semibold text-[1.3rem] w-full hover:bg-light-blue hover:text-white block'>Wash</a> 
                       </Link>
                    </li>
                    <li className='w-full my-[.5rem]'>
                      <Link href={`/about`}>
                       <a onClick={()=>setSlideIn(false)} className='p-[.5rem] font-semibold text-[1.3rem] w-full hover:bg-light-blue hover:text-white block'>About</a> 
                       </Link>
                    </li>
                    <li className='w-full my-[.5rem]'>
                      <Link href={`/contact`}>
                       <a onClick={()=>setSlideIn(false)} className='p-[.5rem] font-semibold text-[1.3rem]  w-full hover:bg-light-blue hover:text-white block'>Contact</a> 
                       </Link>
                    </li>
                    {!userInfo ? 
                       <li className='w-full my-[.5rem]'>
                       <Link href={`/account/login`}>
                          <a onClick={()=>setSlideIn(false)} className='p-[.5rem] rounded font-medium text-[1.3rem] w-full bg-light-blue text-white block text-center'>LogIn</a> 
                        </Link>
                     </li>
                     :
                    <li  className='w-full my-[.5rem]' >
                         <button onClick={()=>setAccountDropdown(!accountDropdown)} className='p-[.5rem] rounded font-semibold text-[1.3rem] w-full border-2 border-blue-500 flex items-center justify-between   text-blue-700 '>
                           <p>W {userInfo.balance}</p>
                             <IoCaretDownCircle />
                         </button>
                       {accountDropdown &&       
                      <ul className='w-full ml-[2rem] border-l-2 mt-2 px-[1rem]'>
                        <li className='w-full my-[.5rem] p-[1rem]'>
                          <Link href={`/orders`}>
                          <a onClick={()=>setAccountDropdown(false)} className='p-[.2rem] rounded font-medium text-[1.2rem] w-full hover:bg-light-blue hover:text-white block '>Orders</a> 
                          </Link>
                        </li>
                        <li className='w-full my-[.5rem] p-[1rem]'>
                          <Link href={`/account/forget_password`}>
                          <a  onClick={()=>setAccountDropdown(false)} className='p-[.2rem] rounded font-medium text-[1.2rem] w-full hover:bg-light-blue hover:text-white block '>Forget Password</a> 
                          </Link>
                        </li>
                        <li className='w-full my-[.5rem] p-[1rem]'>
                          <a onClick={logUserOut}  className='p-[.2rem] rounded font-medium text-[1.2rem] w-full hover:bg-light-blue hover:text-white block '>
                           Login with Another Account  
                          </a> 
                        </li>
                        <li className='w-full my-[.5rem] p-[1rem]'>
                          <Link href={`/`}>
                          <a   onClick={logUserOut} className='p-[.2rem] rounded font-medium text-[1.2rem] w-full hover:bg-light-blue hover:text-white block '>
                           Logout  
                          </a> 
                          </Link>
                        </li>
                      </ul>
                       }
                    </li>
                  }
                 
                 </ul>
               </div>
          </div>
          
        </div>
      </div>  
    </nav>
  )
}

export default Navbar