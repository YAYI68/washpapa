
import Head from 'next/head'
import React, { Fragment } from 'react'
import Main from '../../components/Main'
import Services from '../../components/Services'




const WashService = () => {
  
  return (
    <Fragment>
       <Head>
       <title className="font-avant">anywash/wash</title>
      </Head>
      <Main className={`mt-[5rem] md:mt-[7rem]`}>
      <Services />
    </Main>
    </Fragment>
   
  )
}

export default WashService