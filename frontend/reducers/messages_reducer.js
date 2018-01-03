import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return Object.assign({}, oldState, { [action.message.id]: action.message });
    default:
      return oldState;
  }
};
