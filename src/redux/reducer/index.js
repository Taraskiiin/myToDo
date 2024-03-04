import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  todo: todoReducer,
});

export default rootReducer;
