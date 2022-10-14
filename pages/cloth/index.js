// import path from "path";
// import fs from "fs/promises";
import React, { Fragment,useEffect,useRef,useState } from 'react'
import Main from '../../components/Main'
import ProductContainer from '../../components/ProductContainer'
import { clothData } from '../../data/dummy'


function Cloth(props) {
   const { cloth } = props
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={cloth} />
    </Main>
  )
}


export async function getStaticProps (){
    // const filepath = path.join(process.cwd(), 'data','cloth.json')
    // const jsonData = await fs.readFile(filepath)
    // const data = JSON.parse(jsonData)
  return{
    props:{
       cloth:clothData
    }
  }
}

export default Cloth