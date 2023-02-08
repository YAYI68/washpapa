import { ref, set } from "firebase/database";
import { db } from "../config/firebaseConfig";

export const saveDataToDb = async(Order,currentDate) => {

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
}