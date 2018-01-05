import { combineReducers } from 'redux';
import messages from './messages_reducer';
import users from './users_reducer';

export default combineReducers({
  messages,
  users
});
