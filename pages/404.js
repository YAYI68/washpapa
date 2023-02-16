import Head from 'next/head'
import React, { Fragment } from 'react'
import Main from '../components/Main'

function Error() {
  return (
    <Fragment>
    <Head>
       <title className="font-avant">anywash/error</title>
    </Head>
   <Main className="mt-[5rem] flex flex-col items-center justify-center">
     <section className='mt-[3rem] w-[80%] md:w-full '>
     <h2 className='text-[3rem] md:text-[2rem] font-quickbold text-center '>OOPS 404 </h2>
     <p className='text-[1.5rem] md:text-[1rem] text-center'>Page not found </p>
     </section>
   </Main>   
  </Fragment>
   
  )
}

export default Error