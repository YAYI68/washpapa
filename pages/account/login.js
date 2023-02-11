import dynamic from 'next/dynamic';
import React, { useState, useRef, useEffect } from 'react';
import Main from '../../components/Main'


const LoginForm = dynamic(() => import('../../components//LoginForm'), {
  ssr: false,
})


const Login = () => {

  return (
    <Main className=' mt-[5rem]'>
      <LoginForm />
    </Main>
  )
}

export default Login

