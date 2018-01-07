import { combineReducers } from 'redux';
import messages from './messages_reducer';
import channels from './channels_reducer';
import users from './users_reducer';

export default combineReducers({
  channels,
  messages,
  users
});
