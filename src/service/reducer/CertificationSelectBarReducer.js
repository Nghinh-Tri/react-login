import {Type} from "../constant/index";

var initState = []

const certificationSelectBarReducer = (state = initState, action)=>{
    switch (action.type) {
        case Type.FETCH_CERTIFICATION_LIST:      
            return action.certiList;    
        default:
            return [...state];
    }
}

export default certificationSelectBarReducer;