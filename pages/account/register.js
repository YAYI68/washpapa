import React, { Fragment } from 'react';
import Main from '../../components/Main'

import dynamic from 'next/dynamic';
import Head from 'next/head';

const RegisterForm = dynamic(() => import('../../components/RegisterForm'),{
  ssr: false,
})



const Register = () => {
  

  return (
    <Fragment>
       <Head>
         <title className="font-avant">anywash/login</title>
        </Head>
        <Main className=' mt-[5rem]'>
       <RegisterForm />
    </Main>
    </Fragment>
  
  )
}

export default Register;