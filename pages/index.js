import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import GetApp from '../components/GetApp'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'



export default function Home() {
  return (
    <Fragment>
      <Header/>
      <Main className={`dark:bg-black`}>
        <Services/>
        <GetApp />
      </Main>
    </Fragment>
  )
}
