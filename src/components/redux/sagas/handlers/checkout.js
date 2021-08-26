import { call, put } from "redux-saga/effects";
import { setShippingCountries, setToken, setShippingSubdivisions, setShippingOptions, setCaptureCheckout } from "../../ducks/checkout";
import { requestCaptureCheckout, requestGenerateToken, requestGetShippingCountries, requestGetShippingOptions, requestGetShippingSubdivisions } from "../requests/checkout";


export function* handleGenerateToken(action) {
    try {
        const response = yield call(requestGenerateToken,action.id)
        yield put(setToken(response))
    } catch (error) {
        console.log(error)
    }
}

export function* handleGetShippingCountries(action) {
    try {
        const response = yield call(requestGetShippingCountries,action.id)
        yield put(setShippingCountries(response))
    } catch (error) {
        console.log(error)
    }
}

export function* handleGetShippingSubdivisions(action) {
    try {
        const response = yield call(requestGetShippingSubdivisions,action.countryCode)
        yield put(setShippingSubdivisions(response))
    } catch (error) {
        console.log(error)
    }
}

export function* handleGetShippingOptions(action) {
    try {
        const response = yield call(requestGetShippingOptions,action.id, action.country, action.region)
        yield put(setShippingOptions(response))
    } catch (error) {
        console.log(error)
    }
}

export function* handleCaptureCheckout(action) {
    try{
        const response = yield call(requestCaptureCheckout,action.id,action.order)
        yield put(setCaptureCheckout(response))
    } catch (error) {
        console.log(error)
    }
}