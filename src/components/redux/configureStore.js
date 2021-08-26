import { combineReducers, createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'
import productReducer from './ducks/products'
import cartReducer from './ducks/cart'
import checkoutReducer from './ducks/checkout'

const reducer = combineReducers({
    products: productReducer,
    carts: cartReducer,
    checkout: checkoutReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;