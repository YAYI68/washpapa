
import Link from 'next/link'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' w-full bg-blue-200 dark:bg-slate-900 px-[3rem] py-[2rem]'>
     <div className='h-full w-full flex flex-col items-center '>
        <div className='w-[70%] md:w-[90%] flex items-center md:flex-col md:items-start  justify-between'>
          <p className='text-light-blue  text-[2rem] font-semibold font-quicksand'>anywash</p>
          <ul className='list-none md:w-full flex md:flex-col items-center md:items-start gap-4 text-white text-[1.2rem]'>
            <li>
              <Link href={``}>
               <a className='hover:border-b-2 border-b-light-blue text-light-blue'>Wash</a>
              </Link>
            </li>
            <li>
              <Link href={``}>
               <a className='hover:border-b-2 border-b-light-blue text-light-blue'>About</a>
              </Link>
            </li>
            <li>
              <Link href={``}>
                <a className='hover:border-b-2 border-b-light-blue text-light-blue'>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className='mt-[2rem] text-[1.8rem] mb-[.5rem] w-full bg-light-blue'/>
      <div className=' w-[50%] lg:w-[70%] flex flex-col gap-3 '>
        <p className='text-center text-[1.2rem] text-gray-700 dark:text-gray-100'>Follow Us on Our Socials</p>
        <div className='mx-auto flex gap-4'>
        <button className='hover:translate-y-[-3px] transition-[transform]'>
        <FaFacebook  className='w-7 h-7 fill-light-blue ' />
       </button>
       <button className='hover:translate-y-[-3px] transition-[transform]'>
        <FaInstagram className='w-7 h-7 fill-light-blue' />
       </button>
       <button className='hover:translate-y-[-3px] transition-[transform]'>
         <FaTwitter className='w-7 h-7 fill-light-blue' />
       </button>
        </div>  
      </div>
     </div>
   
    </footer>
  )
}

export default Footer