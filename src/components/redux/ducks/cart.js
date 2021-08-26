export const ADD_TO_CART = "addToCart";
export const GET_CART = "getCart"
export const UPDATE_CART = "updateCart"
export const REMOVE_CART = "removeCart"
export const EMPTY_CART = "emptyCart"
export const REFRESH_CART = "refreshCart"
const SET_CART = "setCart";

export const addToCart = (id,quantity) => ({
    type: ADD_TO_CART,
    id: id,
    quantity: quantity
})

export const getCart = () => ({
    type: GET_CART
})

export const setCart = (cart) => ({
    type: SET_CART,
    cart: cart
})

export const updateCart = (id, quantity) => ({
    type: UPDATE_CART,
    id: id,
    quantity: quantity
})

export const removeCart = (id) => ({
    type: REMOVE_CART,
    id: id
})

export const emptyCart = () => ({
    type: EMPTY_CART
})

export const refreshCart = () => ({
    type: REFRESH_CART
})

const initialState = {
    cart: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => { 
    switch(action.type) {
        case SET_CART: 
         const cart = action.cart
         console.log(cart)
         return {...state, cart: cart}
        default:
            return state;
    }
}