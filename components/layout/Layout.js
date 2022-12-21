import React, { Fragment } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from '../Navbar';


function Layout({children}) {
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