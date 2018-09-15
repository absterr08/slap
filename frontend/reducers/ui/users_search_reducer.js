import { RECEIVE_SEARCHED_USERS } from '../../actions/user_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return action.users;
    default:
      return state;
  }
};
