import React, { Fragment } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from '../Navbar';


function Layout({children}) {
  const {currentMode}= useStateContext()
  return (
    <Fragment>
      <div className={`${currentMode === 'Dark'?'dark':''} w-full dark:bg-slate-900 h-full `}>    
     <Navbar />
      <Fragment>
        {children}
      </Fragment>
      </div>
    </Fragment>
  )
}

export default Layout