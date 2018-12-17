import { LOGIN } from '../constants/ActionTypes';

const INITIAL_STATE = {
    isLoggedIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true }
        default:
            return state;
    }
};