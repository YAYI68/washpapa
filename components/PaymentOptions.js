
import { ref, serverTimestamp, set, update } from 'firebase/database'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '../config/firebaseConfig';
import { useStateContext } from '../context/ContextProvider';
import { discountAmount, stringDate } from '../utils/order';

function PaymentOptions() {
   const router = useRouter();
   const [ disCount, setDisCount ] = useState(false);
   const {Order,setOrder,userInfo,setUserInfo} = useStateContext();
   const currentDate = stringDate()
   const {discountPoint,discountPrice} = discountAmount(userInfo.balance,Order.price)

   const activateDiscount = ()=>{     
      if(!disCount){
         setOrder({
            ...Order,
            price: userInfo.balance?discountPrice:Order.price,
         })
         setUserInfo({
            ...userInfo,
            balance:userInfo.balance?discountPoint:userInfo.balance
         })
      }
      setDisCount(true)
   }

   const payWithCash = async()=>{
      setOrder({
         ...Order,
         paymentType:"TRANSFER",
         timeStamp: serverTimestamp(),
      })
      await set(ref(db, `Orders/${Order.orderID}`), {
              ...Order
            });
      await set(ref(db, `OrderP/${Order.buyerID}/${Order.orderID}`), {
               ...Order
             });
      await set(ref(db, `OrderByDate/${currentDate}/${Order.orderID}`), {
               ...Order
             });
      await set(ref(db, `Cash Transactions/${currentDate}/${Order.orderID}`), {
               "email":Order.buyerEmail,
               "phone":Order.deliveryPhone,
               "cash value given":`NGN ${Order.price}`,
               "verifiedPayment?":false
             });

      await  update(ref(db, 'Users/' + userInfo.uid), {
               balance:userInfo.balance?discountPoint:userInfo.balance,
             });
      router.push('/')
      console.log("Payment in Cash or transfer is pressed ")
      
   }

  return (
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
     <div className='w-[30%] lg:w-[50%] md:w-[70%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
      <div className='w-full h-full flex flex-col gap-2  items-center'>
         <p className='text-light-blue text-[1.1rem] font-semibold'>Wash papa Payment</p>
         <div className='w-full bg-white h-[15rem] dark:bg-slate-200 flex flex-col items-center justify-center gap-4'>
            <p className='dark:text-black font-medium'>AMOUNT TO PAY</p>
            <p  className='text-light-blue font-semibold text-[2rem]'>NGN {Order.price}</p>
         </div>
         <button type="submit" onClick={activateDiscount} className='bg-white border-light-blue border-2 text-light-blue px-4 w-full font-medium py-2 rounded-md shadow-md'>Activate Discount</button>
         <button type="submit" onClick={payWithCash} className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Cash</button>
         <button type="submit" className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Online</button>
      </div>
     </div>
  </section>
  )
}

export default PaymentOptions