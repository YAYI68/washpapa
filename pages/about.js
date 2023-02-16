import Head from "next/head"
import { Fragment } from "react"
import Main from "../components/Main"
import WashAbout from "../components/WashAbout"



function About() {
  return (
    <Fragment>
       <Head>
       <title className="font-avant">anywash/about</title>
      </Head>
      <Main className="mt-[5rem] flex flex-col items-center justify-center">
     <WashAbout />
    </Main>
    </Fragment>
   
  )
}

export default About