import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
