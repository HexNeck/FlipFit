import { ADD_TASK } from '../actions';

const toDos = [
  {id: 0,
  text: 'stuff to do'},
  {id: 1,
  text: 'stuff to do'},
  {id: 2,
  text: 'stuff to do'}
];

const tasks = (state = {toDos}, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_TASK:
      return {...state, toDos: [...state.toDos, action.payload] };
    case "DELETE_TASK":
      return {...state};
    default:
      return state
  }
};

export const getTodos = (state)  => {
  return state.toDos
}

export default tasks
