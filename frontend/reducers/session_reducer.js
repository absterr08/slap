import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';


export default (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user});
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
