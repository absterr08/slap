import * as UserApiUtil from '../util/user_api_util';
import * as MessageApiUtil from '../util/message_api_util';
import { fetchMessages, receiveMessages } from './message_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveSearchedUsers = (users) => {
  return {
    type: RECEIVE_SEARCHED_USERS,
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

export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
};

export const searchUsers = (query) => dispatch => {
  return UserApiUtil.searchUsers(query).then(users => dispatch(receiveSearchedUsers(users)))
}
