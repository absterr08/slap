import * as SessionApiUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT = 'LOGOUT';

const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

const receiveCurrentUser = user => {
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
	return SessionApiUtil.login(user).then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};


export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(() =>
    dispatch(logoutUser()),
    (err) => errCallback(err));
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};

export const guestSignup = () => (dispatch) => {
  return SessionApiUtil.guestSignup().then((user) =>
    dispatch(receiveCurrentUser(user)),
    (err) => errCallback(err));
};
