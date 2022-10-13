import React from 'react'

function WashDetail({service}) {
  return (
    <div className={`w-[47%]  rounded-md border absolute right-5 hidden `}>
    <p className='shadow-md w-full p-4 text-center rounded text-light-blue text-[1.2rem] font-semibold'>{service.name}</p>
   <div className='w-full p-2'>
   <div  className=' p-2 border-b'>
      <p className='text-[1.2rem] font-medium'>Details</p>
      <p className=''>{service.details}</p>
    </div>
    <div className='p-2 border-b '>
    <p className='text-[1.2rem] font-medium'>Quantity</p>
    <p>{service.quantity}</p>
  </div>
  <div className='p-2 border-b '>
    <p className='text-[1.2rem] font-medium'>Return Time</p>
    <p>{service.period}</p>
  </div>
  <div className='p-2 border-b '>
    <p className='text-[1.2rem] font-medium'>Delivery Fee</p>
    <p>NGN {service.DeliveryFee}</p>
  </div>
  <div className='p-2 border-b '>
    <p className='text-[1.2rem] font-medium'>Quantity</p>
    <p>NGN {service.TotalCost}</p>
  </div>
    <button type="" className='w-full p-2 text-center bg-light-blue mt-4 text-white font-medium text-[1.1rem]'>Continue</button>
   </div>
  </div>
  )
}

export default WashDetail