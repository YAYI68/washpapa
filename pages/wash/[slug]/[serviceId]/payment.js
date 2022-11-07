import React from 'react'
import Main from '../../../../components/Main'
import PaymentOptions from '../../../../components/PaymentOptions';
// import { getService,getAllService } from '../lib/utils';


function Payment() {
  return (
    <Main  className='mt-[5rem]'>
       <PaymentOptions  />
    </Main>
  )
}

// export async function getStaticPaths(){

//     const data = await getAllService()
//     return {
//         paths:data.map((wash)=>({params:{slug:wash.typeofWash,serviceId:wash.name}})),
//         fallback: false,
//     }
//   }  
  
//   export async function getStaticProps(context){
//       const { params } = context;
//       const { serviceId } = params;
//       const data = await getService(serviceId)
  
//     return {
//       props:{
//         washService:data
//       }
//     }
  
//   }
export default Payment