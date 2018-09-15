import { combineReducers } from 'redux';
import currentChannel from './ui/current_channel_reducer';
import defaultChannel from './ui/default_channel_reducer';
import modals from './ui/modals_reducer';
import searchedUsers from './ui/users_search_reducer';
import searchedChannels from './ui/channel_search_reducer';
import subscribedChannels from './ui/subscribed_channels_reducer';

export default combineReducers({
  currentChannel,
  searchedUsers,
  searchedChannels,
  subscribedChannels,
  defaultChannel,
  modals
});
