import React, { useEffect, useState } from 'react'
import Confirmation from '../Confirmation';
import ShippingForm from '../ShippingForm';
import PaymentForm from '../PaymentForm';
import { useHistory } from 'react-router-dom'
import { generateToken, getCaptureCheckout } from '../../redux/ducks/checkout';
import { useDispatch, useSelector } from 'react-redux';

const pages = ["Shipping Address","Payment Details"]

const Checkout = () => {
    const cart_items = useSelector((state)=> state.carts.cart)
    const token = useSelector((state)=> state.checkout.token)
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0)
    const[shippingData, setShippingData] = useState({})
    const Shippingcountry = useSelector(state => state.checkout.shippingCountry)
    const ShippingSubdivision = useSelector(state => state.checkout.shippingSubdivision)
    const ShippingOption = useSelector(state => state.checkout.shippingOption)
    const history = useHistory()

    const nextStep = () => setActiveStep(ps => ps+1);
    const backStep = () => setActiveStep(ps => ps-1);

    const next = (data) => {
        data.ShippingCountry = Shippingcountry;
        data.ShippingSubdivision = ShippingSubdivision;
        data.ShippingOption = ShippingOption;
        setShippingData(data)
        nextStep()
    }

    useEffect(() => {
        cart_items ? (dispatch(generateToken(cart_items.id))) : (history.push("/"))
    }, [cart_items]) 

    return (
        <div className="grid h-screen overflow-auto items-center justify-center">
            <main className={`${activeStep !== pages.length && `bg-gray-200 shadow-custom rounded-lg font-poppins m-5 max-w-5xl`}`}>
                <div className="p-10">
                    {activeStep !== pages.length && (
                        <>
                        <h1 className="text-center uppercase text-xl mb-10">Checkout</h1>
                        <div className="grid grid-cols-2 divide-x divide-new-100 text-center my-5">
                            <h1 className={`${activeStep === 0 ? `font-bold underline` : `font-light`}`}>{pages[0]}</h1>
                            <h1 className={`${activeStep === 1 ? `font-bold underline` : `font-extralight`}`}>{pages[1]}</h1>
                        </div>
                        </>
                        )}
                    <div>
                        {activeStep === pages.length ? <Confirmation shippingData={shippingData}/> :(activeStep < pages.length && activeStep === 0 ? <ShippingForm checkoutToken={token} next={next}/> 
                        : <PaymentForm shippingData={shippingData} backStep={backStep} nextStep={nextStep}/>)}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Checkout
