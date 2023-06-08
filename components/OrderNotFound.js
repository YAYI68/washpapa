import Image from 'next/image'
import React from 'react'
import NotfoundIcon from "/public/svg/no_item.svg"

function OrderNotFound() {
  return (
    <div className='flex flex-col items-center'>
        <div className='h-[60vh] md:h-[40] w-[60%] md:w-[80%]'>
            <Image src={NotfoundIcon} alt='' />
        </div>
        <p className="text-[2rem] text-center lg:text-[1.5rem] font-semibold font-quickbold"> You dont currently have any order yet </p>
    </div>
  )
}

export default OrderNotFound