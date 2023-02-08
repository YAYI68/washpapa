
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

