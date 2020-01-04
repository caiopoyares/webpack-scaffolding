import { ADD_TODO } from "../actions/todos";

const INITIAL_STATE = [{ id: 1, text: "Arrumar as malas para Floripa" }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      const length = state.length;
      const newLastId = state[length - 1].id + 1;
      return [
        ...state,
        {
          id: newLastId,
          text: action.payload
        }
      ];
    default:
      return state;
  }
}
