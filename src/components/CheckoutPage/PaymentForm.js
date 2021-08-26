import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Elements, ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { refreshCart } from '../redux/ducks/cart'
import { getCaptureCheckout } from '../redux/ducks/checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({shippingData, backStep, nextStep}) => {

    const cart_items = useSelector((state)=> state.carts.cart)
    const token = useSelector((state)=> state.checkout.token)
    const dispatch = useDispatch();


    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if(!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: cardElement,
        });

        if(error) {
            console.log('[Error]', error);
        } else {
            const orderData = {
                line_items: cart_items.line_items,
                customer: {firstname: shippingData.firstName, 
                    lastname: shippingData.lastName,
                    email: shippingData.email},
                    shipping: {
                        name: 'Primary',
                        street: shippingData.address,
                        town_city: shippingData.city,
                        state: shippingData.ShippingSubdivision,
                        postal_zip: shippingData.zipCode,
                        country: shippingData.ShippingCountry                         
                    },
                    fulfillment: {shipping_method: shippingData.ShippingOption},
                    payment: {
                        gateway: 'stripe',
                        stripe: {
                            payment_method_id: paymentMethod.id
                        }
                    }
            }
            console.log(orderData)

            if(token) 
            {
                await dispatch(getCaptureCheckout(token.id, orderData))
                await dispatch(refreshCart())
                nextStep()
            }
        }
    }
    return (
        <div className="grid divide-y-2 divide-green-600 gap-3">
            <div id='1'>
                <h1 className="text-lg font-medium mb-3">Order Summary</h1>
                <div className='flex flex-col gap-3'> 
                    {cart_items.line_items.map((item)=> (
                        <div className="text-sm font-light grid grid-cols-3">
                            <h1 className="text-left">{item.name}</h1>
                            <h1 className="text-center font-medium">Quantity: <span className='font-normal'>{`${item.quantity}`}</span></h1>
                            <h1 className="text-left font-medium">Price: <span className='font-normal'>{`${item.line_total.formatted_with_symbol}`}</span></h1>
                        </div>
                    ))}
                </div>
            </div>
            <div id='2'>
                <h1 className='mt-3 text-lg font-medium mb-3'>Payment Method</h1>
                <div>
                        <Elements stripe={stripePromise}>
                            <ElementsConsumer>
                                {({elements, stripe}) => (
                                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                        <CardElement />
                                        <div className ="flex gap-5 mt-5 flex-wrap sm:flex-nowrap">
                                            <button className="rounded-full w-full border-2 p-2 border-new-100 tracking-wide hover:bg-new-100 hover:text-white" 
                                            onClick={backStep}>Back</button>
                                            {!stripe ? (<button className='rounded-full w-full border-2 p-2 border-green-600 bg-green-600 text-white disabled:cursor-not-allowed disabled:opacity-50'
                                            type='submit' disabled>{`Pay ${cart_items.subtotal.formatted_with_symbol}`}</button>) : (
                                                <button className='rounded-full w-full border-2 p-2 border-green-600 bg-green-600 text-white hover:bg-transparent hover:text-black'
                                            type='submit'>{`Pay ${cart_items.subtotal.formatted_with_symbol}`}</button>
                                            ) }
                                        </div>
                                    </form>
                                )}
                            </ElementsConsumer>
                        </Elements>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm
