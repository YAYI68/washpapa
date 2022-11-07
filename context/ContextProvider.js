import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import React, {createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebaseConfig';
export const StateContext = createContext();

const initialState = {
  register:false,
  login:false,
}


function ContextProvider({children}) {
    const [ currentMode, setCurrentMode ] = useState('Light');

    const [ userInfo, setUserInfo ] = useState();
   
    const [isLoading,setIsLoading ] = useState(initialState);

    const loading = (click,state)=>{
      setIsLoading({
        ...initialState,
        [click]:state,
      })
    }

    useEffect(() => {
      const unSub = onAuthStateChanged(auth,async(user)=>{
        if(user){
              
        }
        else{
          setUserInfo("")
    
        }
      })
      return () => {
        unSub();
     }
      }, [])
  //   useEffect(() => {
  //     const user= localStorage.getItem('userInfo')
  //     setUserInfo(user)
  //   }, [userInfo])

  useEffect(() => {
    const user= JSON.parse(localStorage.getItem('userInfo'))
    setUserInfo(user)
  }, [])




  return (
    <StateContext.Provider value={{
      currentMode,
      setCurrentMode,
      userInfo,
      setUserInfo,
      loading,
      isLoading,

    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=>useContext(StateContext)