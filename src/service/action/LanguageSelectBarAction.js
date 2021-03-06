import { Type } from "../constant/index"
import axios from "axios";
import { API_URL } from "../util/util";

export const fetchHardSkill = () => {
    var url = `${API_URL}/Language`
    return (dispatch) => {
        axios.get(
            url,
            { headers: { "Authorization": `Bearer ${localStorage.getItem('user').replace(/"/g, "")}` } }
        ).then(res => {
            dispatch(fetchLanguageSuccess(res.data.resultObj))
        })
    }
}

export const fetchLanguageSuccess = (language) => {
    return {
        type: Type.FETCH_LANGUAGE_LIST,
        language
    };
}