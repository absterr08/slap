import merge from 'lodash/merge';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL, SWITCH_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_CURRENT_USER, LOGOUT} from '../../actions/session_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel.id;
    case SWITCH_CHANNEL:
      return action.channelId;
    case RECEIVE_MESSAGE:
      if (state.id === action.message.channel_id) {
        currentChannel = merge({}, state);
        currentChannel.messages.push(action.message.id);
        return currentChannel;
      }
      return state;
    case REMOVE_CHANNEL:
    case RECEIVE_CURRENT_USER:
      // localStorage.removeItem("currentChannel")
      return action.user.default_channel;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
