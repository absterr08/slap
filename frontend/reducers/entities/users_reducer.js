import merge from 'lodash/merge';
import { RECEIVE_USERS, RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user});
    case RECEIVE_CHANNEL:
      const users = action.payload.users.reduce((acc, user) => {
        acc[user.user.id] = user.user;
        return acc;
      }, {});
      return users;
    default:
      return state;
  }
};
