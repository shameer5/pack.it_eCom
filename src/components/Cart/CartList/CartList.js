import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart, updateCart } from '../../redux/ducks/cart'

const CartList = ({cart_item}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex">
        <img className="object-cover w-40 h-40 md:w-52 md:h-52 rounded-lg mr-7 " src={cart_item.media.source} alt={cart_item.name} />
        <div className="flex flex-grow flex-wrap justify-between">
            <h1 className="grid text-2xl font-light items-center">{cart_item.name}</h1>
            <div className="grid gap-4">
                <h2 className="grid items-end text-2xl">{cart_item.line_total.formatted_with_symbol}</h2>
                <div className="flex justify-center gap-2 items-start">
                    <button className="rounded-full border-2 h-7 w-7 border-new-100 bg-new-100 text-white hover:bg-transparent hover:text-black"
                    onClick={() => dispatch(updateCart(cart_item.id,(cart_item.quantity+1)))}>+</button>
                    <h2 className="text-lg">{cart_item.quantity}</h2>
                    <button className="rounded-full border-2 h-7 w-7 border-new-100 bg-new-100 text-white hover:bg-transparent hover:text-black"
                    onClick={() => dispatch(updateCart(cart_item.id,(cart_item.quantity-1)))}>-</button>
                </div>
            </div>
        </div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#334257" onClick={()=>dispatch(removeCart(cart_item.id))}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
        </div>
    )
}

export default CartList
