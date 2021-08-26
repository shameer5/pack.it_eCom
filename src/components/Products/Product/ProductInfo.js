import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const products = useSelector((state)=> state.products.products)
    const {name} = useParams();
    console.log(name)
    return (
        <div>
         {products && products.filter((product)=> (product.name === name)).map((product) => (
            <>
                <div className="flex flex-1 gap-6 font-poppins md:mt-16 mx-5 flex-wrap md:flex-nowrap mb-5">
                <div className="flex flex-0 flex-col justify-center order-2 md:order-1">
                    <h1 className="font-poppins text-4xl font-semibold">{product.name}</h1>
                    <p className="mt-5" dangerouslySetInnerHTML={{__html: product.description}} />
                    <div className="flex justify-between mt-5">
                        <h2 className="font-semibold">{product.price.formatted_with_symbol}</h2>
                        <button className="rounded-full border-2 p-2 border-new-100 tracking-wider hover:bg-transparent bg-new-100 hover:text-black text-white">Add to Cart</button>
                    </div>
                </div>
                <img className="object-cover w-full shadow-lg rounded-lg sm:h-100 order-1 md:order-2" src={product.media.source} alt={product.name} />
                </div>
            </>
         ) )
         }
        </div>
    )
}

export default ProductInfo
