import { combineReducers } from 'redux';
import messages from './entities/messages_reducer';
import channels from './entities/channels_reducer';
import users from './entities/users_reducer';

export default combineReducers({
  channels,
  messages,
  users
});
