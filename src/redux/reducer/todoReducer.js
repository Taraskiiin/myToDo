import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE } from "../actions/todo";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          label: action.payload.label,
          done: action.payload.done,
        },
      ];

    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload.index);

    case TOGGLE_DONE:
      return state.map((todo, index) =>
        index === action.payload.index ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
