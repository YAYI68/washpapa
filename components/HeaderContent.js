import Image from 'next/image';
import React from 'react';
import { GoTriangleRight } from "react-icons/go";


const HeaderContent = () => {
  return (
    <div className='w-[90%] h-[90%] mt-4  flex ' >
      <div className='w-[60%] h-full pt-12 flex flex-col items-center justify-center'>
        <div className='w-[80%] h-[90%]  flex flex-col gap-5'>       
        <h1 className='text-[2.5rem] font-bold dark:text-white '>
          Get laundry services at your doorstep.
        </h1>
        <p className='text-[1.3rem] font-semibold text-light-blue'>
          Wash, dry and iron your clothes and shoes at affordable prices.
        </p>  
        <ul className='text-[1.3rem] font-semibold'>
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> We'll collect your laundry</span> </li> 
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> hygienically clean it,</span></li>
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> deliver it back to you freshly cleaned </span></li>
           <li className='flex items-center gap-4'><GoTriangleRight className="fill-light-blue" /> <span> ironed and nicely packaged.</span> </li>
        </ul>
        <button type="" className="w-fit px-4 py-2 text-center bg-light-blue text-white ml-[3rem] text-[1.3rem] font-semibold rounded-md">Let's clean</button>
        </div>
      </div>
      <div className='w-[40%] h-full z-[3]'>
        <div className=' h-full w-full flex flex-col items-center justify-center'>       
        <Image src="/images/laundrry.jpg" alt="" height={480} width={480} className="rounded-full shadow-xl border-2  object-cover " />
        </div>
      </div>
    </div>
  )
}

export default HeaderContent