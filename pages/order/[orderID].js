
import { useRouter } from 'next/router'
import React from 'react'



const OrderDetail = () => {
    const router = useRouter();
    const orderId = router.query.orderID

    console.log({router})
    
  return (
    <div>
        OrderDetail
    </div>
  )
}

export default OrderDetail