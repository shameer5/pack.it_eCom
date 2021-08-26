import { call, put } from "redux-saga/effects";
import { setProducts } from "../../ducks/products";
import { requestGetProducts } from '../requests/products'

export function* handleGetProducts(action) {
    
    try{
        const response = yield call(requestGetProducts);
        const {data} = response;
        yield put(setProducts(data))
    } catch (error) {
        console.log(error)
    }
}
