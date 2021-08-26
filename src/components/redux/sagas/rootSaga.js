import { takeLatest } from "redux-saga/effects";
import { ADD_TO_CART, EMPTY_CART, GET_CART, REFRESH_CART, REMOVE_CART, UPDATE_CART } from "../ducks/cart";
import { GENERATE_TOKEN, GET_CAPTURE_ORDER, GET_SHIPPING_COUNTRY, GET_SHIPPING_OPTIONS, GET_SHIPPING_SUBDIVISIONS } from "../ducks/checkout";
import { GET_PRODUCTS } from "../ducks/products";
import { handleAddToCart, handleEmptyCart, handleGetCart, handleRefreshCart, handleRemoveCart, handleUpdateCart } from "./handlers/cart";
import { handleCaptureCheckout, handleGenerateToken, handleGetShippingCountries, handleGetShippingOptions, handleGetShippingSubdivisions } from "./handlers/checkout";
import { handleGetProducts } from "./handlers/products";

export function* watcherSaga() {
    yield takeLatest(GET_PRODUCTS, handleGetProducts);
    yield takeLatest(GET_CART, handleGetCart);
    yield takeLatest(ADD_TO_CART, handleAddToCart);
    yield takeLatest(UPDATE_CART, handleUpdateCart);
    yield takeLatest(REMOVE_CART, handleRemoveCart);
    yield takeLatest(EMPTY_CART, handleEmptyCart);
    yield takeLatest(REFRESH_CART , handleRefreshCart);
    yield takeLatest(GENERATE_TOKEN, handleGenerateToken);
    yield takeLatest(GET_SHIPPING_COUNTRY, handleGetShippingCountries);
    yield takeLatest(GET_SHIPPING_SUBDIVISIONS, handleGetShippingSubdivisions);
    yield takeLatest(GET_SHIPPING_OPTIONS, handleGetShippingOptions);
    yield takeLatest(GET_CAPTURE_ORDER, handleCaptureCheckout);
}