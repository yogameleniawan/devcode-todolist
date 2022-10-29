import {
    combineReducers
} from "redux";
import activity from "./activity";
import todos from "./todo";

export default combineReducers({
    activity,
    todos
});