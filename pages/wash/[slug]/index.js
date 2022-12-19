
import React, { useEffect, useState } from 'react'
import Main from '../../../components/Main';
import ProductContainer from '../../../components/ProductContainer';
import { getAllService, getServiceType } from '../../../lib/utils';



const WashType = ({wash}) => {
    // console.log({wash})
  return (
    <Main className='w-full mt-[12vh] '>
    <ProductContainer products={wash} />
    </Main>
  )
}

export async function getStaticPaths(){

    const data = await getAllService()
    return {
        paths:data.map((wash)=>({params:{slug:wash.typeofWash}})),
        fallback: false,
    }

}

export async function getStaticProps(context){
     const { params }= context
     const { slug } = params   

    const data = await getServiceType(slug);
    return {
        props:{
            wash: data,
        }
    }

}

export default WashType