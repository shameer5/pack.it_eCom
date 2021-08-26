import { commerce } from "../../../lib/commerce_config";

export function requestGenerateToken(id){
    return commerce.checkout.generateToken(id, {type: 'cart'});
}

export function requestGetShippingCountries(checkOutTokenId) {
    return commerce.services.localeListShippingCountries(checkOutTokenId)
}

export function requestGetShippingSubdivisions(countryCode) {
    const response = commerce.services.localeListSubdivisions(countryCode);
    return response
}

export async function requestGetShippingOptions(checkOutTokenId, country, region = null) {
    const response = await commerce.checkout.getShippingOptions(checkOutTokenId, {country,region});
    return response 
}

export async function requestCaptureCheckout(checkoutTokenId, newOrder) {
    const order = await commerce.checkout.capture(checkoutTokenId, newOrder)
    console.log(order)
    return order
}