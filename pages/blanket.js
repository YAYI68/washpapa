import React from 'react';
import Main from '../components/Main'
import { clothData } from '../data/dummy'
import ProductContainer from '../components/ProductContainer'

function blanket() {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={clothData} />
    </Main>
  )
}

export default blanket