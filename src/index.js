import { render } from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './components/redux/configureStore';

render(
<Provider store={store}>
    <App /> 
</Provider>,
document.getElementById('root'));