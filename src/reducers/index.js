import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import TodoAppReducer from './TodoAppReducer';

const config = combineReducers({
  users: UserReducer,
  todos: TodoAppReducer,
});

export default { config };
