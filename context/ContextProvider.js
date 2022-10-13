import React, {createContext, useContext, useState } from 'react'

const StateContext = createContext();



function ContextProvider({children}) {
    const [ currentMode, setCurrentMode ] = useState('Light');


  return (
    <StateContext.Provider value={{
      currentMode,setCurrentMode   
    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useContextState = ()=>useContext(StateContext)