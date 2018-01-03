import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = { currentUser: null }, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user});
    default:
      return state;
  }
};
