import * as api from '../api/auth';
import { AUTH } from './types';

export const login = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await api.login(formData);

        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (err) {
        // console.log(err.response.data.message);

        var error = err.response.data.message; 
        dispatch({ type: "AUTH_ERROR", error });
    }
};

export const googleLogin = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await api.googleLogin(formData);

        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (err) {
        // console.log(err.response.data.message);

        var error = err.response.data.message; 
        dispatch({ type: "AUTH_ERROR", error });
    }
};

export const signin = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await api.register(formData);
        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (err) {
        // console.log(err.response.data.message);

        var error = err.response.data.message;
        dispatch({ type: "AUTH_ERROR", error });
    }
};