import merge from 'lodash/merge';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { REMOVE_CHANNEL } from '../../actions/channel_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      currentChannel.id = action.payload.channel.id;
      currentChannel.isDm = action.payload.channel.is_dm;
      currentChannel.name = action.payload.channel.name;
      currentChannel.messages = action.payload.messages;
      localStorage.setItem("currentChannel", `${currentChannel.id}`);
      return currentChannel;
    case RECEIVE_MESSAGE:
      if (state.id === action.message.channel_id) {
        currentChannel = merge({}, state);
        currentChannel.messages.push(action.message.id);
        return currentChannel;
      }
      return state;
    case REMOVE_CHANNEL:
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
