import React, { useState, useRef } from 'react';
import Main from '../../components/Main'
import Link from 'next/link';
import { signup } from '../../db/auth';
import { authvalidator } from '../../utils/validator';
import { useRouter } from 'next/router';
import { Spinner } from '../../components/Spinner';
import dynamic from 'next/dynamic';

const RegisterForm = dynamic(() => import('../../components/RegisterForm'),{
  ssr: false,
})



const Register = () => {
  

  return (
    <Main className=' mt-[5rem]'>
       <RegisterForm />
    </Main>
  )
}

export default Register;