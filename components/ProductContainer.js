
import {useState} from 'react'
import Wash from './Wash'
 


const ProductContainer = ({products}) => {
const [ tabNum, setTabNum] = useState("")
const toggle = (index)=>{
    setTabNum(index)
  }
  return (
    <div className='w-[80%] mx-auto mt-[2rem] border-main-blue border-2 dark:bg-gray-800 rounded-md  relative md:static  p-4 md:p-2 h-[90vh] md:w-[90%] lg:h-[100%]'>
    {products.map((product,index)=>(
        <Wash tab={index} key={index} toggleTab={toggle} tabNum={tabNum}   service={product} />
    ))}   
    </div>
  )
}

export default ProductContainer