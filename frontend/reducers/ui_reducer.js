import { combineReducers } from 'redux';
import currentChannel from './ui/current_channel_reducer';
import modals from './ui/modals_reducer';

export default combineReducers({
  currentChannel,
  defaultChannel: (state = null, action) => state,
  modals
});
