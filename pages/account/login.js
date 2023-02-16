import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useState, useRef, useEffect, Fragment } from 'react';
import Main from '../../components/Main'


const LoginForm = dynamic(() => import('../../components/LoginForm'),{
  ssr: false,
})


const Login = () => {

  return (
    <Fragment>
       <Head>
         <title className="font-avant">anywash/login</title>
        </Head>
        <Main className=' mt-[5rem]'>
         <LoginForm />
        </Main>
    </Fragment>
   
  )
}

export default Login

