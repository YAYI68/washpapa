

// import { useState } from 'react';

import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useMemo} from "react";
import Main from "../../components/Main";
import { useStateContext } from "../../context/ContextProvider";
import OrderNotFound from "../../components/OrderNotFound";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

function Order() {
    const { userInfo, clientOrders, setClientOrders } = useStateContext();
   
    const user = useMemo(()=>userInfo,[userInfo])
  useEffect(()=>{
     (async()=>{
        if(userInfo && userInfo.uid){
          const res = await fetch(`${baseUrl}/OrderP/${userInfo.uid}.json`)
          const result = await res.json()
          if(result){
            const client =  Object.values(result)
            setClientOrders(client)
          }
        } 
     })()
  },[user,userInfo,setClientOrders])

  if(clientOrders.length===0){
    return (
       <Fragment>
           <Head>
             <title className="font-avant">anywash/order</title>
           </Head>
           <Main  className={'mt-[5rem]'}>
          <section className='h-[80vh] w-full flex flex-col items-center justify-center p-2'>
           <OrderNotFound />
          </section>
        </Main>
       </Fragment>
       
    )
  }
    return (
     <Main className='w-full mt-[12vh] '>   
       <div className='w-[80%] mx-auto mt-[2rem] border-2 dark:bg-gray-800 rounded-md  relative md:static  p-4  lg:h-[100%]'>
        <p className="text-[1.5rem] text-light-blue ">Your Recent Order&apos;s</p>  

        <div className=' w-full lg:flex-col lg:items-center flex flex-col p-4 gap-4 '>
        {clientOrders.map((order)=>(
            <Link key={order.orderID} href={`/order/${order.orderID}`}>
            <div key={order.orderID} className={`w-[47%] sm:w-full lg:w-[80%] md:w-[90%]  h-[7rem] cursor-pointer  dark:text-white rounded-md border border-l-4 border-l-light-blue p-4 flex justify-between flex-col`}>
             <div  className='flex justify-between items-center '>
               <p className='text-[1.5rem] md:text-[1.2rem] font-semibold'>{order.typeOfWash}</p>
             </div>
             <div className='flex justify-between items-center'>
               <p className={` text-blue-200 md:text-[.8rem] font-semibold dark:text-slate-300`}>{order.date}</p>
               <p className='font-semibold place-items-end text-right md:text-[1rem]'>NGN {order.price}</p>
             </div>       
           </div>
            </Link> 
        ))}
          
        </div>
    </div>
        </Main>
   
    )
  }
  
  export default Order;