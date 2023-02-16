
import Main from '../../components/Main';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import Head from 'next/head';

const OrderInfoDetail = dynamic(() => import('../../components/OrderInfo'), {
  ssr: false,
})





const OrderDetail = () => {
   
  return (
    <Fragment>
      <Head>
      <title className="font-avant">anywash/order</title>
      </Head>
      <Main className='w-full mt-[12vh] '>
       <OrderInfoDetail />
    </Main>
    </Fragment>
  
  )
}

export default OrderDetail