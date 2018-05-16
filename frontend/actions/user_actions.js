import * as UserApiUtil from '../util/user_api_util';
import * as MessageApiUtil from '../util/message_api_util';
import { fetchMessages, receiveMessages } from './message_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};
const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);
export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const updateAvatar = (userId, formData) => dispatch => (
  UserApitUtil.updateAvatar(userId, formData).then()
);

export const fetchUsersThenMessages = () => dispatch => {
  return UserApiUtil.fetchUsers().then( users => {
    MessageApiUtil.fetchMessages().then( messages => {
      dispatch(receiveUsers(users));
      dispatch(receiveMessages(messages));
    });
  });
};
