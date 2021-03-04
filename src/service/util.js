import axios from "axios";

export const API_URL = "https://localhost:5001/api"

export const callAPI = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
    });
};