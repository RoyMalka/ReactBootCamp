import { GET_CART_ITEMS_STARTED,GET_CART_ITEMS_SUCCESS,GET_CART_ITEMS_FAIL,DELETE_FROM_CART } from '../constants/ActionTypes';
import cartService from '../services/cartService';

const INITIAL_STATE = {
    isLoading: false,
    cartItems: []
}


function mergeState(state, nextState) {
    return { ...state, ...nextState }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case GET_CART_ITEMS_STARTED:
        case GET_CART_ITEMS_SUCCESS:
        case GET_CART_ITEMS_FAIL: 
            return mergeState(state, action.payload);
        case DELETE_FROM_CART:
            return { ...state, cartItems: cartService.deleteFromCart(action.id) }
        default:
            return state;
    }
};