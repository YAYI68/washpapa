import React from 'react';
import Main from '../../components/Main'
import ProductContainer from '../../components/ProductContainer'
import { shoeData } from '../../data/dummy'

function shoe() {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={shoeData} />
    </Main>
  )
}

export default shoe