
import Main from '../../components/Main';
import dynamic from 'next/dynamic';

const OrderInfoDetail = dynamic(() => import('../../components/OrderInfo'), {
  ssr: false,
})





const OrderDetail = () => {
   
  return (
    <Main className='w-full mt-[12vh] '>
       <OrderInfoDetail />
    </Main>
  )
}

export default OrderDetail