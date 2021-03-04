import { combineReducers } from "redux";
import alertReducer from "./AlertReducer";
import authentication from "./AuthenticateReducer";

const MainReducer = combineReducers({
    alertReducer,
    authentication
})

export default MainReducer