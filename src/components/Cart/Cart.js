import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { emptyCart } from '../redux/ducks/cart'
import CartList from './CartList/CartList'

const Cart = () => {
    const cart_items = useSelector((state)=> state.carts.cart)
    const dispatch = useDispatch();
    const history = useHistory();
    if(!cart_items)
        return (
        <div className="grid h-100 items-center justify-center">
            <svg class="animate-spin ml-1 mr-3 h-10 w-10 text-new-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        )
    else return (
        <div className="font-poppins mt-16 mx-6">

            {cart_items.line_items.length ? cart_items.line_items.map(cart_item => (
                <div className="flex flex-col mb-5 shadow-custom bg-gray-100 p-5 rounded-xl">
                    <CartList cart_item={cart_item} />
                </div>
            )) : (
                <h1 className="text-3xl">YOUR CART IS EMPTY...</h1>
            )}
            {cart_items.line_items.length ? (
            <>
            <div className="pt-5 border-t-2 border-new-100 text-2xl gap-5 flex justify-center">
                <h1>SubTotal:</h1>
                <h1 className="font-semibold">{cart_items.subtotal.formatted_with_symbol}</h1>
            </div>
            <div className="my-5 flex gap-5 justify-center">
                <button className="border-new-100 rounded-full border-2 py-1 px-2 uppercase tracking-wider hover:text-white hover:bg-new-100"
                onClick={()=> dispatch(emptyCart())}>Empty Cart</button>
                <button className="border-new-100 rounded-full border-2 py-1 px-2 uppercase tracking-wider hover:text-white hover:bg-new-100"
                onClick={() => history.push('/checkout')}>Check Out</button>
            </div>
            </>
            ): null}
        </div>
    )
}

export default Cart
