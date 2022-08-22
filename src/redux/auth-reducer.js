import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import React from 'react';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {userId, login, email} = response.data.data;
        dispatch(setAuthUserData(userId, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;