import React, {createContext, useContext, useState } from 'react'

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

   const setCurrentUser = (userInfo)=>{
    setUserInfo(userInfo)
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
   } 




  return (
    <StateContext.Provider value={{
      currentMode,
      setCurrentMode,
      userInfo,
      setCurrentUser, 
      loading,
      isLoading

    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=>useContext(StateContext)