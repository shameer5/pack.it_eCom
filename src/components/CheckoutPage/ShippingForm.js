import { Grid } from '@material-ui/core';
import React, { useEffect} from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getShippingCountries,shippingCountry, getShippingSubdivisions, shippingSubdivision, getShippingOptions, shippingOption } from '../redux/ducks/checkout';
import FormInputField from './FormInputField';
import FormSelectField from './FormSelectField';

const ShippingForm = ({checkoutToken, next}) => {
    const methods = useForm()
    const dispatch = useDispatch()
    let history = useHistory()

    const countries = useSelector(state => state.checkout.countries)   
    const Shippingcountry = useSelector(state => state.checkout.shippingCountry)
    const subdivisions = useSelector(state => state.checkout.subdivisions)
    const ShippingSubdivision = useSelector(state => state.checkout.shippingSubdivision)
    const options = useSelector(state => state.checkout.options)
    const ShippingOption = useSelector(state => state.checkout.shippingOption)

    useEffect(()=> {
        checkoutToken && dispatch(getShippingCountries(checkoutToken.id))
    }, [checkoutToken]);

    useEffect(()=> {
       Shippingcountry && dispatch(getShippingSubdivisions(Shippingcountry))
    },[Shippingcountry])

    useEffect(()=> {
        ShippingSubdivision && dispatch(getShippingOptions(checkoutToken.id,Shippingcountry,ShippingSubdivision))
    },[ShippingSubdivision])


    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=> next(data))}>
                    <Grid container spacing={3}>
                        <FormInputField required name='firstName' label='First Name'/>
                        <FormInputField required name='lastName' label='Last Name'/>
                        <FormInputField required name='address' label='Address'/>
                        <FormInputField required name='email' label='Email'/>
                        <FormInputField required name='city' label='City'/>
                        <FormInputField required name='zipCode' label='ZIP / Postal Code'/>
                        <FormSelectField name='ShippingCountry' label='Shipping Country' mapValue={countries} mainValue={Shippingcountry} onChange={e => dispatch(shippingCountry(e.target.value))}/>
                        <FormSelectField name='ShippingSubdivision' label='Shipping Subdivisions' mapValue={subdivisions} mainValue={ShippingSubdivision} onChange={e => dispatch(shippingSubdivision(e.target.value))}/> 
                        <FormSelectField name='ShippingOption' label='Shipping Options' mapValue={options} mainValue={ShippingOption} onChange={e => dispatch(shippingOption(e.target.value))}/> 
                    </Grid>
                    <div className="flex flex-wrap sm:flex-nowrap justify-around mt-7 gap-5">
                        <button className="rounded-full w-full border-2 p-2 border-new-100 bg-new-100 text-white hover:bg-transparent hover:text-black"
                        onClick={() => history.push('/cart')}>Back to Cart</button>
                        {ShippingOption ? (<button className='rounded-full w-full border-2 p-2 border-green-600 tracking-wide hover:bg-green-600 hover:text-white'
                        type="submit" >Next</button>)
                        : (<button className='rounded-full w-full border-2 p-2 border-green-600 tracking-wide disabled:cursor-not-allowed'
                        disabled>Next</button>)}
                    </div>
                </form>
            </FormProvider>
            
        </div>
    )
}

export default ShippingForm
