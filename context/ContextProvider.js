import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import Cookies from 'js-cookie';
import React, {createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth, db } from '../config/firebaseConfig';
export const StateContext = createContext();

const initialState = {
  register:false,
  login:false,
}


const initialOrderState = {
   orderID: "",
   buyerID: "",
   buyerEmail: "",
   category: "",
   typeOfWash: "",
   dryClean: null,
    price: null,
    deliveryPhone: "",
    nearestBusStop: "",
    notes: "",
    date: "",
    paymentType: "",
    status: 1,
    timeStamp: null,
    complete:false,
}

function ContextProvider({children}) {
    const [ currentMode, setCurrentMode ] = useState('Light');
    const [ userInfo, setUserInfo ] = useState();
    const [isLoading,setIsLoading ] = useState(initialState);
    const [ clientOrders, setClientOrders ] = useState([])
    const [ Order, setOrder ] = useState(initialOrderState);
   

    const saveLocalUser = (user)=>{
      localStorage.setItem('userInfo',JSON.stringify(user))
      setUserInfo(user)
     }
     
    //  useEffect(()=>{
    //   const currentOrder = sessionStorage.getItem('order')
    //   setOrder(currentOrder)
    //  },[Order.orderID])

     const saveOrder = (order)=>{
      sessionStorage.setItem('order',JSON.stringify(order))
      setOrder(order)
     }

     

    const user = useMemo(()=>{userInfo},[userInfo])

    useEffect(() => {
      const user= JSON.parse(localStorage.getItem('userInfo'))
      setUserInfo(user)
    }, [user])




  return (
    <StateContext.Provider value={{
      currentMode,
      setCurrentMode,
      userInfo,
      setUserInfo,
      setIsLoading,
      isLoading,
      saveOrder,
      saveLocalUser,
      Order,
      clientOrders, setClientOrders

    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=>useContext(StateContext)