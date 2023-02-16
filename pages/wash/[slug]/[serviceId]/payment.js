
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Fragment } from 'react'
import Main from '../../../../components/Main'


const PaymentDetail = dynamic(() => import('../../../../components/PaymentOptions'), {
  ssr: false,
})

function Payment() {
  return (
    <Fragment>
        <Head>
          <title className="font-avant">anywash/payment</title>
         </Head>
         <Main  className='mt-[5rem]'>
       <PaymentDetail  />
    </Main>
    </Fragment>
  
  )
}

 
export default Payment