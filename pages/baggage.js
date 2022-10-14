import React from 'react';
import Main from '../components/Main'
import { bagData } from '../data/dummy'
import ProductContainer from '../components/ProductContainer'

const baggage = () => {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={bagData} />
    </Main>
  )
}

export default baggage