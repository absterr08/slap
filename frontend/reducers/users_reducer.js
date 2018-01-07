import merge from 'lodash/merge';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user});
    case RECEIEVE_CHANNEL:
      const users = action.payload.messages.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      return merge({}, state, users);
    default:
      return state;
  }
};
