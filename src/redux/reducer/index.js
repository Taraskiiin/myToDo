import { combineReducers } from 'redux'
import modalReducer from './modal-reducer.js'
import todoReducer from './todo-reducer.js'
import filterReducer from './filter-reducer.js'

const rootReducer = combineReducers({
  modal: modalReducer,
  todo: todoReducer,
  filter: filterReducer,
})

export default rootReducer
