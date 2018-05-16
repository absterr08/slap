import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { RECEIVE_MESSAGE } from '../../actions/message_actions';


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
      channel = action.payload.channel;
      const newChannels = merge({}, state);
      delete newChannels[channel.id];
      return newChannels;
    case RECEIVE_CURRENT_USER:
      return {};
    case RECEIVE_MESSAGE:
      channel = state[action.message.channel_id];
      channel.messages.push(action.message.id);
      return merge({}, state, { [channel.id]: channel});
    default:
      return state;
  }
};

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
