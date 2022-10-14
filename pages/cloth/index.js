import React, { Fragment,useEffect,useRef,useState } from 'react'
import Main from '../../components/Main'
import ProductContainer from '../../components/ProductContainer'
import { clothData } from '../../data/dummy'


function Cloth() {

  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={clothData} />
    </Main>
  )
}

export default Cloth