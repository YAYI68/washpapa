
import Head from "next/head"
import { Fragment } from "react"
import Main from "../../../../components/Main"
import WashDetail from "../../../../components/WashDetail"




const BagDetail = () => {
  
    return (
      <Fragment>
          <Head>
          <title className="font-avant">anywash/wash</title>
         </Head>
         <Main className=' mt-[5rem]'>
          <WashDetail  />
         </Main>
      </Fragment>
    
    )
  }

  export default BagDetail