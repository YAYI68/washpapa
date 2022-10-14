import React from 'react';
import Main from '../../components/Main'
import ProductContainer from '../../components/ProductContainer'
import { bagData } from '../../data/dummy'

const baggage = () => {
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={bagData} />
    </Main>
  )
}

export default baggage