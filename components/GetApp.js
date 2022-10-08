import React from 'react'

function GetApp() {
  return (
    <section className='my-[7rem]'>
       <div className='w-[80%] h-[30rem] bg-blue-400 mx-auto rounded-md relative flex items-center'>
        <div className='w-[50%] h-[80%] flex items-center flex-col gap-5'>
            <h2 className='text-light-blue text-[3rem] font-bold'>Download the app!</h2>
            <p className='text-[1.5rem]'>It takes less than 5 minutes to sign up!</p>
            <button type="" className='h-[5rem] w-fit'>
                <img src="./images/playstore.png" alt="playstore" className='h-full w-full' />
            </button>
        </div>
       </div>
    </section>
  )
}

export default GetApp