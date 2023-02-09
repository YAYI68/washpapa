
import { ref, serverTimestamp, update } from 'firebase/database'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { db } from '../config/firebaseConfig';
import { useStateContext } from '../context/ContextProvider';
import { discountAmount, stringDate } from '../utils/order';
import { saveDataToDb } from '../utils/storeDb';



 
function PaymentOptions() {
   const router = useRouter();
   const [ disCount, setDisCount ] = useState(false);
   const {Order,setOrder,userInfo,saveLocalUser} = useStateContext();
   const currentDate = stringDate()
   const {discountPoint,discountPrice} = discountAmount(userInfo.balance,Order.price)

   const config = {
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: Date.now(),
      amount: Order.price,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: Order.buyerEmail,
        phone_number: Order.deliveryPhone,
      },
      customizations: {
        title: Order.category,
        description: `Payment for ${Order.typeOfWash}`,
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
    const handleFlutterPayment = useFlutterwave(config);
   const activateDiscount = ()=>{     
      if(!disCount){
         setOrder({
            ...Order,
            price: userInfo.balance?discountPrice:Order.price,
         })
         saveLocalUser({
            ...userInfo,
            balance:userInfo.balance?discountPoint:userInfo.balance
         })
      }
      setDisCount(true)
   }

   const getBalance = ()=>{
      let balance;
         if(!disCount){
           balance=userInfo.balance + 200
         }
         else{
            balance=discountPoint
         }
         return balance
   }
   
   const payment = async(type)=>{
      setOrder({
         ...Order,
         paymentType:type,
         timeStamp: serverTimestamp(),
      })
        await saveDataToDb(Order,currentDate)
         const balance = getBalance()
         saveLocalUser({
            ...userInfo,
            balance: balance
         })
      await  update(ref(db, 'Users/' + userInfo.uid), {
               balance,
             });

   }

   const payWithCash = async()=>{
          await payment("TRANSFER")
          const status = confirm("Payment is made successfully with Cash. Thanks for using anywash")
          if(status || !status){
               router.push('/')
          }
    
   }

   const payOnline = async()=>{
     handleFlutterPayment({
            callback: (response) => {
               console.log({response});
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
                
            },
          });
          await payment("ONLINE")
          const status = confirm("Payment is made successfully Online. Thanks for using anywash")
          if(status || !status){
               router.push('/')
          }
   }

  return (
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
     <div className='w-[30%] lg:w-[50%] md:w-[70%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
      <div className='w-full h-full flex flex-col gap-2  items-center'>
         <p className='text-light-blue text-[1.1rem] font-semibold'>anywash Payment</p>
         <div className='w-full bg-white h-[15rem] dark:bg-slate-200 flex flex-col items-center justify-center gap-4'>
            <p className='dark:text-black font-medium'>AMOUNT TO PAY</p>
            <p  className='text-light-blue font-semibold text-[2rem]'>NGN {Order.price}</p>
         </div>
         <button type="submit" onClick={activateDiscount} className='bg-white border-light-blue border-2 text-light-blue px-4 w-full font-medium py-2 rounded-md shadow-md'>Activate Discount</button>
         <button type="submit" onClick={payWithCash} className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Cash</button>
         <button type="submit" onClick={payOnline} className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Online</button>
      </div>
     </div>
  </section>
  )
}

export default PaymentOptions