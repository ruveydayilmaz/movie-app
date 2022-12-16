import * as types from '../actions/types';

const initialState = {
    token: null,
    user: null,
    error: null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.data.data }));
            return {
                ...state,
                ...action.data.data,
                loading: false,
            };
        case types.LOGOUT:
            localStorage.clear();
            return {
                ...state,
                token: null,
                user: null,
            };
        case 'AUTH_START':
            return {
                ...state,
                loading: true,
            };
        case 'AUTH_ERROR':
            Object.assign({}, state, {
                error: action.error,
                loading: false,
            });
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case types.EVENT_RESET:
            return {
                ...state,
                error: null,
            };
        default:
            return {
                ...state,
            };
    }
}

export default authReducer;