import { combineReducers, createStore } from 'redux';
import tasks from './tasks'

const reducers = combineReducers({
  tasks,
});

export const store = createStore(reducers);
