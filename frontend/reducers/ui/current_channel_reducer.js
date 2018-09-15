import merge from 'lodash/merge';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL, SWITCH_CHANNEL, SWITCH_DM } from '../../actions/channel_actions';
import { RECEIVE_DM } from '../../actions/dm_actions';
import { RECEIVE_CURRENT_USER, LOGOUT} from '../../actions/session_actions';


export default (state = null, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return { type: 'Channel', id: action.channel.id };
    case RECEIVE_DM:
      return { type: 'Dm', id: action.dm.id };
    case SWITCH_CHANNEL:
      return { type: action.channelType, id: action.channelId };
    case REMOVE_CHANNEL:
      return { type: 'Channel', id: action.channel.defaultChannel }; //change this; shouldnt come from jbuilder every time a channel gets rendered yuck
    case RECEIVE_CURRENT_USER:
      return { type: 'Channel', id: action.user.defaultChannel };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
