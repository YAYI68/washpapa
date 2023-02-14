
import Head from 'next/head'
import { Fragment } from 'react'
import Footer from '../components/Footer'
import GetApp from '../components/GetApp'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'




export default function Home() {
 

  return (
    <Fragment>
      <Head>
       <title className="font-avant">anywash</title>
      </Head>
      <Header/>
      <Main className={`dark:bg-black`}>
        <Services/>
        <GetApp />
      </Main>
      <Footer />
    </Fragment>
  )
}

// export async function getStaticProps(){
//   let adminData = [] 
//  try{
//   const response = await fetch(
//     'https://beta.curvy.sku.io/api/sales-orders',
//     {  
//        method: 'GET',
//        headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer 42|TeZS41mTl6geNYjq7GpewFAGLlin230fRB1dCyR2',
//        }
//     }
//     )
//  const results = await response.json()
//   adminData =  results.data
//  }
//  catch(error){
//   console.log(error)
//  }

//  return {
//   props:{
//       admin:adminData,
//   }
// }
// }


// import axios from 'axios';


// export async function getServerSideProps(){
//    const getShopify = async()=>{
//       const { data } = await 
//       axios.get(
//         'https://curvybras.com/admin/api/2023-01/orders.json?fields=id,tags,name,created-at&limit=250',
//         {
//           headers: {
//             Method: 'GET',
//             'X-Shopify-Access-Token': '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',
//           },
//         }
//       );
//       return data.orders;
//    }
//    const getSku = async ()=>{
//     const { data } = await axios.get(
//       'https://curvy.sku.io/api/sales-orders?limit=25',
//       {
//         headers: {
//           Method: 'GET',
//           Accept: 'application/json',
//           Authorization: 'Bearer 5358|t31QKwqZ3MuzcTIR2KJeN6uFFpyAOXZzQtAfoT79',
//         },
//       }
//     );
//     return data.data 
//    }

//    try{
//     const [ shopify, skuOders]= await Promise.all([getShopify(),getSku()])
//     console.log({shopify, skuOders})
//     const shopifyOrdersArray = shopify.map((item) => item.name);
//     const skuOderArray = skuOders.map((item) => item.sales_order_number);
//        console.log({shopifyOrdersArray})
//        console.log({skuOderArray})
//     return {
//       props:{
//         shopify,
//         skuOders
//       }
//     }
//    }
//    catch(error){
//      console.log(error)
//    }
// }


// export async function getServerSideProps() {
//   const shopifyResponsePromise = axios.get(
//     'https://curvybras.com/admin/api/2023-01/orders.json?fields=id,tags,name,created-at&limit=250',
//     {
//       headers: {
//         Method: 'GET',
//         'X-Shopify-Access-Token': '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',
//       },
//     }
//   );

// export async function getServerSideProps() {
//   const shopifyResponsePromise = axios.get(
//     'https://curvybras.com/admin/api/2023-01/orders.json?fields=id,tags,name,created-at&limit=250',
//     {
//       headers: {
//         Method: 'GET',
//         'X-Shopify-Access-Token': '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',
//       },
//     }
//   );

//   const skuResponsePromise = axios.get(
//     'https://curvy.sku.io/api/sales-orders?limit=25',
//     {
//       headers: {
//         Method: 'GET',
//         Accept: 'application/json',
//         Authorization: 'Bearer 5358|t31QKwqZ3MuzcTIR2KJeN6uFFpyAOXZzQtAfoT79',
//       },
//     }
//   );

//   try {
//     const [shopifyResponse, skuResponse] = await Promise.all([
//       shopifyResponsePromise,
//       skuResponsePromise,
//     ]);
//  return {
//       props: {
//         shopifyOrders: shopifyResponse.data.orders,
//         skuData: skuResponse.data.data,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         shopifyOrders: [],
//         skuData: [],
//       },
//     };
//   }
// }
// // export default function CombinedData({ shopifyOrders, skuData }) {
// //   console.log(shopifyOrders);
// //   console.log(skuData);
// //   const shopifyOrdersArray = shopifyOrders.map((order) => {
// //     const skuItem = skuData.find((item) => item.sales_order_number === order.name);
// // return{
// //   
// // }
// //   });
// // }

// const API_URL = 'https://beta.curvy.sku.io/api/sales-orders';

// const updateData = async (combinedData) => {
//   const promises = combinedData.map((data) => {
//     return axios.put(`${API_URL}/${data.id}`, data, {
//       headers: {
//         Method: 'PUT',
//         Authorization: 'Bearer 41|RM6XOcI1s90j8OFw1FTWwxwtA4Yin70gSqG7rbCo',
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//   });
