import React, { Fragment } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from '../Navbar';


function Layout({children}) {
  const {currentMode}= useStateContext()
  return (
    <Fragment>
      <div className={`${currentMode === 'Dark'?'dark':''} w-full  min-h-full bg-red-500 `}>    
     <Navbar />
      <Fragment>
        {children}
      </Fragment>
      </div>
    </Fragment>
  )
}

export default Layout