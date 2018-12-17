
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer'

export default combineReducers({
    app: appReducer,
    products: productsReducer,
    cart: cartReducer
});