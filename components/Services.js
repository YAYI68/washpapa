import React from 'react'

const Services = () => {
  return (
    <section id="service" className='w-full my-[2rem] '>
        <h2 className='my-[2rem] text-[2rem] font-semibold text-center'>What do you want us to wash?</h2>
       <div className='w-[80%] mx-auto  grid-rows-2 grid-cols-2 gap-5  grid p-1'>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1'>
            <img src="./icons/shirts.png" alt="" className='h-full w-full' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Shirts</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1'>
            <img src="./icons/blanket.png" alt="" className='h-full w-full' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Blankets</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1'>
            <img src="./icons/baggage.png" alt="" className='h-full w-full' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Baggage</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
         <div className='bg-white dark:bg-gray-800 border-2 cursor-pointer rounded-md shadow-md p-2 flex gap-2'>
          <div className='w-[30%] h-full p-1'>
            <img src="./icons/shoes.png" alt="" className='h-full w-full' />
          </div>
          <div className='w-[70%]  h-full p-1 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold'>Shoes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
         </div>
       </div>
    </section>
  )
}

export default Services