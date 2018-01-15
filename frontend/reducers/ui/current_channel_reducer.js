import merge from 'lodash/merge';
import { CHANGE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { REMOVE_CHANNEL } from '../../actions/channel_actions'


export default (state = null, action) => {
  Object.freeze(state);
  let currentChannel = {};
  switch (action.type) {
    case CHANGE_CHANNEL:
      return action.channelId;
    // case REMOVE_CHANNEL:
      // maybe pass in the default channel here?
      // or do nothing bc the redirect already happens elsewhere right
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};
