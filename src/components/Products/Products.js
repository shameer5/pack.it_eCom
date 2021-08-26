import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product/Product'

const Products = () => {
    const products = useSelector((state) => state.products.products)
   console.log(products)
    return (
        <div className="mb-10 grid gap-6 grid-cols-1 ml-5 md:mt-16 mr-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products && products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    )
}

export default Products
