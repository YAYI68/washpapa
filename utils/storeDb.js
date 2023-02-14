import { ref, set } from "firebase/database";
import { db } from "../config/firebaseConfig";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const saveDataToDb = async(Order,currentDate) => {

    await fetch(` ${baseUrl}/Orders/${Order.orderID}.json`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...Order})
    })

   await fetch(`${baseUrl}/OrderP/${Order.buyerID}/${Order.orderID}.json`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...Order})
      })

   
    await fetch(` ${baseUrl}/OrderByDate/${currentDate}/${Order.orderID}.json`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...Order})
      })

    
    await fetch(` ${baseUrl}/Cash Transactions/${currentDate}/${Order.orderID}.json`,{
        method: 'PUT',
        body: JSON.stringify({"email":Order.buyerEmail,
        "phone":Order.deliveryPhone,
        "cash value given":`NGN ${Order.price}`,
        "verifiedPayment?":false})
      })

}