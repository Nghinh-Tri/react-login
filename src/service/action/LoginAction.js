import { Type } from ".."
import { history } from "../helper/History"
import { callAPI } from "../util"

export const login = (username, password) => {
    var user = { userName: username, password: password }
    return dispatch => {
        dispatch(request(user))
        callAPI('User/authenticate', 'POST', user).then(res => {
            console.log(JSON.stringify(res.data.resultObj))
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