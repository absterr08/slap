import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL, RECEIVE_SEARCHED_CHANNELS } from '../../actions/channel_actions';
import { RECEIVE_CHANNELS_AND_DMS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  let channel;
  switch (action.type) {
    case RECEIVE_CHANNELS_AND_DMS:
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_SEARCHED_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      channel = action.channel;
      return merge({}, state, { [channel.id]: channel });
    case REMOVE_CHANNEL:
      const newChannels = merge({}, state);
      delete newChannels[action.channel.id];
      return newChannels;
    case RECEIVE_MESSAGE:
      if (action.message.messageable_type === "Channel") {
        channel = state[action.message.messageable_id];
        channel.messages.push(action.message.id);
        return merge({}, state);
      }
      return state;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
