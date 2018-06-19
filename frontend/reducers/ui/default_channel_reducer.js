import { RECEIVE_CURRENT_USER, LOGOUT} from '../../actions/session_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.defaultChannel;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
