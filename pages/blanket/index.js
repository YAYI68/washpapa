import React from 'react';
import Main from '../../components/Main'
import ProductContainer from '../../components/ProductContainer'
import { blanketData } from '../../data/dummy'

function blanket() {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={blanketData} />
    </Main>
  )
}

export default blanket