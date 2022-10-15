import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const Services = () => {
  return (
    <section id="service" className='w-full my-[2rem] '>
        <h2 className='my-[2rem] text-[2rem] font-semibold text-center dark:text-white dark:bg-black'>What do you want us to wash?</h2>
       <div className='w-[80%] mx-auto flex gap-5 p-1'>
        <Link href={'/wash/cloth'}>
         <div className='bg-white dark:bg-gray-800 border-2 border-light-blue cursor-pointer w-[25%] h-[25rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src="/icons/shirts.png" alt="" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Clothes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Shirts, jeans, trousers and other wearble fabrics</p>
          </div>
         </div>
        </Link>
        <Link href={'/wash/blanket'}>
         <div className='bg-white dark:bg-gray-800 border-2 border-light-blue cursor-pointer w-[25%] h-[25rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src="/icons/blanket.png" alt="" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Blanket</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Blankets, sheets, towels, curtain-cloth</p>
          </div>
         </div>
        </Link>
        <Link href={'/wash/bag'}>
         <div className='bg-white dark:bg-gray-800 border-2 border-light-blue cursor-pointer w-[25%] h-[25rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src="/icons/baggage.png" alt="" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Bags</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>School bags, travelling bags and fabric materials for laundry.</p>
          </div>
         </div>
        </Link>
        <Link href={'/wash/shoe'}>
         <div className='bg-white dark:bg-gray-800 border-2 border-light-blue cursor-pointer w-[25%] h-[25rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src="/icons/shoes.png" alt="" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Shoes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>All kind of cleanable footwear</p>
          </div>
         </div>
        </Link>
       </div>
    </section>
  )
}

export default Services