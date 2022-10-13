import React, { Fragment } from 'react';
import Navbar from '../Navbar';


function Layout({children}) {
  return (
    <Fragment class="dark">
     <Navbar />
      <Fragment>
        {children}
      </Fragment>
    </Fragment>
  )
}

export default Layout