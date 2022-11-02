import React, {createContext, useContext, useState } from 'react'

export const StateContext = createContext();



function ContextProvider({children}) {
    const [ currentMode, setCurrentMode ] = useState('Light');
    const [ userInfo, setUserInfo ] = useState();

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
    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=>useContext(StateContext)