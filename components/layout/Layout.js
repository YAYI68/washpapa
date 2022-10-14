import React, { Fragment } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from '../Navbar';


function Layout({children}) {
  const {currentMode}= useStateContext()
  return (
    <Fragment>  
     <Navbar />
      <Fragment>
        {children}
      </Fragment>
    </Fragment>
  )
}

export default Layout