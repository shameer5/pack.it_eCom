export const GET_PRODUCTS = "getProducts";
export const SET_PRODUCTS = "setProducts";

export const getProducts = () => ({
    type: GET_PRODUCTS
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products: products
})


const initialState = {
    products: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            const {products} = action;
            return {...state, products: products};
        default :
            return state;
    }
}