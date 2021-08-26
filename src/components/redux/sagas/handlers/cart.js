import { call, put } from "redux-saga/effects";
import { setCart } from "../../ducks/cart";
import { requestAddToCart, requestEmptyCart, requestGetCart, requestRefreshCart, requestRemoveCart, requestUpdateCart } from "../requests/cart";

export function* handleGetCart()  {
 try {
     const cart = yield call(requestGetCart);
     yield put(setCart(cart))
 } catch (error) {
   console.log(error)  
 }
}

export function* handleAddToCart(action) {
    try {
       const {cart} = yield call(requestAddToCart,action.id,action.quantity);
        yield put(setCart(cart))
    } catch (error) {
        console.log(error)
    }
}

export function* handleRemoveCart(action){
    try {
        const {cart} = yield call(requestRemoveCart,action.id)
        yield put(setCart(cart))
    } catch (error) {
        console.log(error)
    }
}

export function* handleUpdateCart(action){
    try {
        const {cart} = yield call(requestUpdateCart,action.id,action.quantity)
        yield put(setCart(cart))
    } catch (error) {
        console.log(error)
    }
}

export function* handleEmptyCart(){
    try {
        const {cart} = yield call(requestEmptyCart)
        yield(put(setCart(cart)))
    } catch (error) {
        console.log(error)
    }
}

export function* handleRefreshCart(){
    try {
        const cart = yield call(requestRefreshCart)
        yield(put(setCart(cart)))
    } catch (error) {
        console.log(error)
    }
}