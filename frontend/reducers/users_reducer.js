import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user});
    default:
      return oldState;
  }
};
