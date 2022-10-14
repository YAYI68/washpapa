import React from 'react';
import Main from '../components/Main'
import { shoeData } from '../data/dummy'
import ProductContainer from '../components/ProductContainer'

function shoe() {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={shoeData} />
    </Main>
  )
}

export default shoe