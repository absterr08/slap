import merge from 'lodash/merge';
import { RECEIVE_NEW_CHANNEL_MODAL, RECEIVE_NEW_DM_MODAL } from '../../actions/modal_actions';

const defaultState = {
  newChannel: true,
  newDM: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_CHANNEL_MODAL:
      return merge({}, state, { newChannel: !state.newChannel});
    case RECEIVE_NEW_DM_MODAL:
      return merge({}, state, { newDM: !state.newDM});
    default:
      return state;

  }
};
