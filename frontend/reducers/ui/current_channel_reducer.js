import merge from 'lodash/merge';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL, SWITCH_CHANNEL, SWITCH_DM } from '../../actions/channel_actions';
import { RECEIVE_CURRENT_USER, LOGOUT} from '../../actions/session_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return { type: 'channel', id: action.channel.id };
    case SWITCH_CHANNEL:
      return { type: 'channel', id: action.channelId };
    case SWITCH_DM:
      return { type: 'dm', id: action.channelId };
    case REMOVE_CHANNEL:
      return { type: 'channel', id: action.channel.defaultChannel }; //change this; shouldnt come from jbuilder every time a channel gets rendered yuck
    case RECEIVE_CURRENT_USER:
      // localStorage.removeItem("currentChannel")
      return { type: 'channel', id: action.user.default_channel };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
