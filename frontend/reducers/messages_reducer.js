import merge from 'lodash/merge';
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });
    default:
      return state;
  }
};
