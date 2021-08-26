import React, { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { getProducts } from './components/redux/ducks/products'
import Products from './components/Products/Products'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductInfo from './components/Products/Product/ProductInfo'
import Cart from './components/Cart/Cart'
import Orders from './components/Orders/Orders'
import { getCart } from './components/redux/ducks/cart'
import Checkout from './components/CheckoutPage/Checkout/Checkout'
import { setOrder } from './components/redux/ducks/checkout'

const App = () => {
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCart())
        dispatch(setOrder())
    }, [dispatch])

    return (
        <div className="overflow-hidden">
        <Router>
            <Switch>
                <Route path ='/checkout'>
                    <Checkout />
                </Route>
                <Route path ='/orders'>
                    <Navbar />
                    <Orders />
                </Route>
                <Route path ='/cart'>
                    <Navbar />
                    <Cart />
                </Route>
                <Route path ='/:name'>
                    <Navbar />
                    <ProductInfo />
                </Route>
                <Route path='/'>
                    <Navbar />
                    <Products/>
                </Route>
            </Switch>
        </Router>
        </div>
    )
}

export default App
