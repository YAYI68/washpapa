import React from 'react'
import { useStateContext } from '../context/ContextProvider';

function PaymentOptions() {

   const { Order } = useStateContext();

 const paySubmit = async()=>{
   await set(ref(db, 'Orders/' + orderId), {
      buyerEmail: auth.currentUser.email,
      buyerID: auth.currentUser.uid,
      category:service.category,
      complete:false,
      deliveryPhone:phoneNumber,
      orderID: orderId,
      typeOfWash: service.name,
      dryClean: service.isDryCleaning,
      price: service.TotalCost,
      nearestBusStop: "",
      notes: "",
      date: date,
      paymentType: "",
      status: 1,
      timeStamp: serverTimestamp(),
      isComplete:false,
   });
 }  
  return (
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
     <div className='w-[30%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
      <div className='w-full h-full flex flex-col gap-2  items-center'>
         <p className='text-light-blue text-[1.1rem] font-semibold'>Wash papa Payment</p>
         <div className='w-full bg-white h-[15rem] dark:bg-slate-200 flex flex-col items-center justify-center gap-4'>
            <p className='dark:text-black font-medium'>AMOUNT TO PAY</p>
            <p  className='text-light-blue font-semibold text-[2rem]'>NGN {Order.price}</p>
         </div>
         <button type="submit" className='bg-white border-light-blue border-2 text-light-blue px-4 w-full font-medium py-2 rounded-md shadow-md'>Activate Discount</button>
         <button type="submit" className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Cash</button>
         <button type="submit" className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Online</button>
      </div>
     </div>
  </section>
  )
}

export default PaymentOptions