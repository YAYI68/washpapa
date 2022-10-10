import Image from 'next/image';
import React from 'react';


function GetApp() {
  return (
    <section className='my-[7rem]'>
       <div className='w-[80%] h-[30rem] bg-[#CE93D8] mx-auto rounded-md relative flex items-center'>
        <div className='w-[50%] h-[80%] flex items-center flex-col gap-5'>
            <h2 className='text-light-blue text-[3rem] font-bold'>Download the app!</h2>
            <p className='text-[1.5rem]'>It takes less than 5 minutes to sign up!</p>
            <div className='flex gap-2 w-full items-center justify-center'>
            <button type="button" className='h-[5rem] w-[35%] relative '>
                <Image src="/images/playstore.png" alt="playstore" layout='fill'  />
            </button>
            <button type="button" className='h-[3.2rem] w-[35%] relative'>
                <Image src="/images/ios.png" alt="apple" layout='fill' />
            </button>
            </div>
        </div>

        <div className='h-full w-[50%] flex relative gap-2'>
           <div className=' h-full w-[40%] relative'>
             <Image src="/images/wash1.png" alt="washpapa" layout='fill'/>
           </div> 
           <div className=' h-full w-[40%] relative'>
             <Image src="/images/wash3.png" alt="washpapa" layout='fill' />
           </div>
        </div>
       </div>
    </section>
  )
}

export default GetApp