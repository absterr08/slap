import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  let channel;
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      channel = action.channel;
      return merge({}, state, { [channel.id]: channel });
    case REMOVE_CHANNEL:
      const newChannels = merge({}, state);
      delete newChannels[action.channel.id];
      return newChannels;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
