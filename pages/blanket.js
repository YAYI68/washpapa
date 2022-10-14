import React from 'react';
import Main from '../components/Main'
import { blanketData } from '../data/dummy'
import ProductContainer from '../components/ProductContainer'

function blanket() {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={blanketData} />
    </Main>
  )
}

export default blanket