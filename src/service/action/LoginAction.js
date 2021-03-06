import axios from "axios"
import { Type } from "../constant/index"
import { history } from "../helper/History"
import { API_URL } from "../util/util"

export const login = (username, password) => {
    var user = { email: username, password: password, rememberMe: true }
    return dispatch => {
        dispatch(request(user))
        axios.post(`${API_URL}/User/authenticate`, user).then(res => {
            localStorage.setItem('user', JSON.stringify(res.data.resultObj));
            dispatch(success(JSON.stringify(res.data.resultObj)))
            history.push('/');
        })
    }
}

export const request = (user) => {
    return {
        type: Type.LOGIN_REQUEST,
        user
    }
}

export const success = (user) => {
    return {
        type: Type.LOGIN_SUCCESS,
        user
    }
}

export const failure = (user) => {
    return {
        type: Type.LOGIN_FAILURE,
        user
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    return { type: Type.LOGOUT };
}