import axios from "axios";

export const API_URL = "https://esms2020.azurewebsites.net/api"

export const callAPI = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
    });
};

export const showStatus = status => {
    switch (status) {
        case 0:
            return "Finish"
        default:
            break;
    }
}

export const showSpan = status => {
    switch (status) {
        case 0:
            return "badge-success"
        default:
            break;
    }
}

export const formatDate = date => {
    return date.split("/").reverse().join("-")
}

export const convertPositionList = (list) => {
    var result = []
    list.forEach(element => {
        result.push({ label: element.name, value: element.posID })
    });
    return result;
}

export const convertSkillList = (list) => {
    var result = []
    list.forEach(element => {
        result.push({ label: element.skillName, value: element.skillID })
    });
    return result;
}

export const convertCertificationList = (list) => {
    var result = []
    list.forEach(element => {
        result.push({ label: element.certificationName, value: element.certificationID })
    });
    return result;
}