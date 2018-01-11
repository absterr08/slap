import merge from 'lodash/merge';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/user_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      // debugger
      currentChannel.id = action.payload.channel.id;
      currentChannel.name = action.payload.channel.name;
      currentChannel.messages = action.payload.messages;
      localStorage.setItem("currentChannel", `${currentChannel.id}`);
      return currentChannel;
    case RECEIVE_MESSAGE:
      if (state.id === action.message.channel_id) {
        currentChannel = merge({}, state);
        currentChannel.messages.push(action.message);
        return currentChannel;
      }
      return state;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
