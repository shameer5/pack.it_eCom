import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addToCart } from '../../redux/ducks/cart'

const Product = ({product}) => {
    const history = useHistory()
    const handleClick = () =>{
        history.push(`/${product.name}`)
    }
    const dispatch = useDispatch();

    const handleCartClick  = () => {
        dispatch(addToCart(product.id,1))
    }
    return (
        
            <div className='z-0 font-poppins transistion duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl bg-gray-100 border border-gray-100 rounded-lg shadow-custom p-3'>
                <img className="cursor-pointer object-cover w-full rounded-sm sm:h-96 " src={product.media.source} alt={product.name} onClick={handleClick}/>
                <h1 className="text-lg font-semibold pt-3">{product.name}</h1>
                <div className="flex justify-between">
                    <h2>{product.price.formatted_with_symbol}</h2>
                    <button className="z-1 rounded-full border-2 p-2 border-new-100 tracking-wide hover:bg-new-100 hover:text-white"
                    onClick={handleCartClick}>Add to Cart</button>
                </div>
            </div>
        
    )
}

export default Product
