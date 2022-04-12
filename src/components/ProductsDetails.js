import React from 'react'
import { useParams } from 'react-router-dom'
const ProductsDetails = () => {
    const param = useParams()
  return (
    <section>
        <h1>Product Details</h1>
        <p>{param.productId}</p>
    </section>
  )
}

export default ProductsDetails