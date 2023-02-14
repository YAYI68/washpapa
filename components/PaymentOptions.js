
import { serverTimestamp } from 'firebase/database'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useStateContext } from '../context/ContextProvider';
import { discountAmount, stringDate } from '../utils/order';
import { saveDataToDb } from '../utils/storeDb';
import { Spinner } from './Spinner';

const baseUrl = process.env.NEXT_PUBLIC_API_URL

 
function PaymentOptions() {
   const [ isLoading , setIsLoading ] = useState(false)
   const router = useRouter();
   const [ disCount, setDisCount ] = useState(false);
   const {Order,userInfo,saveLocalUser,saveOrder} = useStateContext();
   const [ curOrder, setCurOrder] = useState(Order);
   const currentDate = stringDate()
   const {discountPoint,discountPrice} = discountAmount(userInfo.balance,Order.price)

  
    useEffect(()=>{
         setCurOrder(JSON.parse(sessionStorage.getItem('order')))
    },[])



   const config = {
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: Date.now(),
      amount: curOrder.price,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email:curOrder.buyerEmail,
        phone_number:curOrder.deliveryPhone,
      },
      customizations: {
        title: curOrder.category,
        description: `Payment for ${curOrder.typeOfWash}`,
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
    const handleFlutterPayment = useFlutterwave(config);
   const activateDiscount = ()=>{     
      if(!disCount){
         // setOrder({
         //    ...Order,
         //    price: userInfo.balance?discountPrice:Order.price,
         // })
         saveOrder({
            ...curOrder,
            price: userInfo.balance?discountPrice:Order.price,
         })
         saveLocalUser({
            ...userInfo,
            balance:userInfo.balance?discountPoint:userInfo.balance
         })
         alert('Sorry You dont have enough points for your discount')
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
      saveOrder({
         ...curOrder,
         paymentType:type,
         timeStamp: serverTimestamp(),
      })
        await saveDataToDb(Order,currentDate)
         const balance = getBalance()
         saveLocalUser({
            ...userInfo,
            balance: balance
         })
         await fetch(`${baseUrl}/Users/${userInfo.uid}.json`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
            
          },
          body:JSON.stringify({...userInfo,balance})
      }) 
   }

   const payWithCash = async()=>{
          setIsLoading(true)
          await payment("TRANSFER")
          setIsLoading(false)
          const status = confirm("Payment is made successfully with Cash. Thanks for using anywash")
          if(status || !status){
               router.push('/')
          }
    
   }

   const payOnline = async()=>{
   
     handleFlutterPayment({
            callback: async(response) => {
                closePaymentModal()
                await payment("ONLINE") 
               const status = confirm("Payment is made successfully Online. Thanks for using anywash")
                if(status || !status){
                router.push('/')
                }   // this will close the modal programmatically
            },
            onClose: () => {
               const status = confirm("Your order has been cancelled")
               if(status || !status){
               router.push('/')
               } 
            },
          });
             
   }
   // if(isLoading){
   //    return null;
   // }

  return (
   
    <section className='h-[80vh] w-full flex flex-col items-center justify-center relative '>
      { curOrder?
       <div className='w-[30%] lg:w-[50%] md:w-[70%]  bg-white shadow-md rounded-md border-2 dark:bg-gray-700 p-4'>
       <div className='w-full h-full flex flex-col gap-2  items-center'>
          <p className='text-light-blue text-[1.1rem] font-semibold'>anywash Payment</p>
          <div className='w-full bg-white h-[15rem] dark:bg-slate-200 flex flex-col items-center justify-center gap-4'>
             <p className='dark:text-black font-medium'>AMOUNT TO PAY</p>
             <p  className='text-light-blue font-semibold text-[2rem]'>NGN {curOrder.price}</p>
          </div>
          <button type="submit" onClick={activateDiscount} className='bg-white border-light-blue border-2 text-light-blue px-4 w-full font-medium py-2 rounded-md shadow-md'>Activate Discount</button>
          <button type="submit" onClick={payWithCash} className='bg-light-blue text-white px-4 w-full flex justify-center items-center gap- font-medium py-2 rounded-md shadow-md'>
           <span> Pay Cash </span>
           {isLoading? 
            <Spinner />
            :""}
          </button>
          <button type="submit" onClick={payOnline} className='bg-light-blue text-white px-4 w-full font-medium py-2 rounded-md shadow-md'>Pay Online</button>
       </div>
      </div>
      :
      '' 
   }
    
  </section>
  )
}

export default PaymentOptions