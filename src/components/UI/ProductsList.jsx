import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = ({data}) => {
  return (
    <>
    {
      data?.map(product => (
        <ProductCard item={product}/>
      ))
    }
    </>
  )
}

export default ProductsList