import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      //debugger
      return merge({}, state, {currentUser: action.user});
    default:
      return state;
  }
};
