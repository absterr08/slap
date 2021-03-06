import merge from 'lodash/merge';
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../../actions/message_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });
    // case RECEIVE_CHANNEL:
      // const messages = action.payload.messages.reduce((acc, message) => {
      //   acc[message.id] = message;
      //   return acc;
      // }, {});
      // return messages;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
