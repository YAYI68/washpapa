
import { useRouter } from 'next/router';
import { useStateContext } from '../context/ContextProvider';

function OrderInfo() {
    const { clientOrders } = useStateContext();
    const router = useRouter();
    const orderId = router.query.orderID
    const order = clientOrders.find((order)=>order.orderID===orderId)

    const submit = ()=>{
      router.push('/order')
    }

  return (
    <div className='w-[80%] mx-auto mt-[2rem]  dark:bg-gray-800  flex items-center justify-center h-[100%]   p-4 '>
    <div  className={`w-[47%] lg:w-[80%] sm:w-full lg:right-0 lg:top-0  rounded-md border lg:static `}>
      <p className='shadow-md w-full p-4 text-center rounded text-light-blue text-[1.2rem] sm:text-[1rem] font-semibold'>{orderId}</p>
    <div className='w-full p-2 dark:text-white'>
     <div  className=' p-2 border-b '>
       <p className='text-[1.2rem] font-medium'>Details</p>
       <p className='dark:text-slate-300 font-semibold'>{order.typeOfWash}</p>
       <p className='dark:text-slate-300'>Location: {order.nearestBusStop}</p>
       <p className='dark:text-slate-300'>Phone: {order.deliveryPhone}</p>
       <p className='dark:text-slate-300'>Date: {order.date}</p>    
     </div>
        <button disabled={order.complete} onClick={submit} className='w-full block p-2 text-center bg-light-blue mt-4 text-white font-medium text-[1.1rem]'>{order.complete?'Completed':'Back'}</button> 
    </div>
   </div>
  </div>
  )
}

export default OrderInfo