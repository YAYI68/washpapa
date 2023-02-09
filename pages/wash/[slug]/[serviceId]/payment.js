
import dynamic from 'next/dynamic'
import Main from '../../../../components/Main'


const PaymentDetail = dynamic(() => import('../../../../components/PaymentOptions'), {
  ssr: false,
})

function Payment() {
  return (
    <Main  className='mt-[5rem]'>
       <PaymentDetail  />
    </Main>
  )
}

 
export default Payment