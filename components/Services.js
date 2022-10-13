import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const Services = () => {
  return (
    <section id="service" className='w-full my-[2rem] '>
        <h2 className='my-[2rem] text-[2rem] font-semibold text-center'>What do you want us to wash?</h2>
       <div className='w-[80%] mx-auto  grid-rows-2 grid-cols-2 gap-5  grid p-1'>
        <Link href={'/cloth'}>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1 relative'>
            <Image src="/icons/shirts.png" alt="" layout='fill' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Clothes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
        </Link>
        <Link href={'/blanket'}>   
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1 relative'>
            <Image src="/icons/blanket.png" alt="" layout='fill' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Blankets</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
        </Link>
        <Link href={'/baggage'}> 
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1 relative'>
            <Image src="/icons/baggage.png" alt="" layout='fill' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Baggage</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
        </Link>
        <Link href={'/shoe'}>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1 relative'>
            <Image src="/icons/shoes.png" alt="" layout='fill' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Shoes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
        </Link>
       </div>
    </section>
  )
}

export default Services