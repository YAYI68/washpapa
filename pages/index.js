
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect } from 'react'
import Footer from '../components/Footer'
import GetApp from '../components/GetApp'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import { auth, db } from '../config/firebaseConfig'
import {  currentDate, generateId } from '../utils/order'



export default function Home() {

 
  return (
    <Fragment>
      <Head>
       <title>Wash Papa</title>
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



// export async function getStaticProps(context){
//   const res = await fetch("https://musica-api.up.railway.app/popular")
//   const data = await res.json();
//   console.log({data})

//   return {
//     props:{
//       music: data
//     }
//   }


// }
