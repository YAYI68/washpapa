import React, { Fragment,useEffect,useRef,useState } from 'react'
import Main from '../components/Main'
import { clothData } from '../data/dummy'
import ProductContainer from '../components/ProductContainer'


function cloth() {

  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={clothData} />
    </Main>
  )
}

export default cloth