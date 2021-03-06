import {Type} from "../constant/index";

var initState = []

const positionSelectBarReducer = (state = initState, action)=>{
    switch (action.type) {
        case Type.FETCH_POSITION_LIST:            
            return action.positionList;    
        default:
            return [...state];
    }
}

export default positionSelectBarReducer;