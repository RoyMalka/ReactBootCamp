import * as types from '../constants/ActionTypes';
import cartService from '../services/cartService';
import productsService from '../services/productsService';

export const login = () => ({ type: types.LOGIN });
export const deleteFromCart = id => ({ type: types.DELETE_FROM_CART, id });

export const getCartItems = () => (dispatch, getState) => {
    dispatch({
        type: types.GET_CART_ITEMS_STARTED,
        payload: {
            isLoading: true
        }
    });
    cartService.loadCartItems()
        .then(cartItems => {
            if (cartItems !== []){
                    dispatch({
                        type: types.GET_CART_ITEMS_SUCCESS,
                        payload: {
                            cartItems,
                            isLoading: false
                        }
                });
            } else {
                dispatch({
                    type: types.GET_CART_ITEMS_FAIL,
                    payload: {
                        isLoading: false
                    }
                });
            }
        });
}


export const loadProducts = () => (dispatch, getState) => {
    dispatch({
        type: types.LOAD_PRODUCTS_STARTED,
        payload: {
            isLoading: true
        }
    });
    productsService.loadProducts()
        .then(products => {
            if (products !== []){
                    dispatch({
                        type: types.LOAD_PRODUCTS_SUCCESS,
                        payload: {
                            products,
                            isLoading: false
                        }
                });
            } else {
                dispatch({
                    type: types.LOAD_PRODUCTS_FAIL,
                    payload: {
                        isLoading: false
                    }
                });
            }
        });
}


export const loadProduct = id => (dispatch, getState) => {
    dispatch({
        type: types.LOAD_PRODUCT_STARTED,
        payload: {
            isLoading: true
        }
    });
    productsService.loadProduct(id)
        .then(product => {
            if (product !== null){
                    dispatch({
                        type: types.LOAD_PRODUCT_SUCCESS,
                        payload: {
                            product,
                            isLoading: false
                        }
                });
            } else {
                dispatch({
                    type: types.LOAD_PRODUCT_FAIL,
                    payload: {
                        isLoading: false
                    }
                });
            }
       });
}


