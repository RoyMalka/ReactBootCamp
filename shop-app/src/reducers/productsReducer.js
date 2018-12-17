import *  as actionTypes from '../constants/ActionTypes';

const INITIAL_STATE = {
    isLoading: false,
    products: [],
    product: null
}


function mergeState(state, nextState) {
    return { ...state, ...nextState }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case actionTypes.LOAD_PRODUCT_STARTED:
        case actionTypes.LOAD_PRODUCT_SUCCESS:
        case actionTypes.LOAD_PRODUCT_FAIL: 
            return mergeState(state, action.payload);
        case actionTypes.LOAD_PRODUCTS_STARTED:
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
        case actionTypes.LOAD_PRODUCTS_FAIL: 
            return mergeState(state, action.payload);
        default:
            return state;
    }
};