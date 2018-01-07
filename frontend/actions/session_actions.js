import * as SessionAPIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const errCallback = (err) => {
  return dispatch(receiveSessionErrors(err.responseText));
};

export const login = (user) => (dispatch) => {
	return SessionAPIUtil.login(user).then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};


export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then(() =>
    dispatch(receiveCurrentUser(null)),
    (err) => errCallback(err));
};

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user).then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};

export const guestSignup = () => (dispatch) => {
  return SessionAPIUtil.guestSignup().then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};
