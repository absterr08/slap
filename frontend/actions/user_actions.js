import * as UserAPIUtil from '../util/user_api_util';
import * as MessageAPIUtil from '../util/message_api_util';
import { fetchMessages, receiveMessages } from './message_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const fetchUsersThenMessages = () => dispatch => {
  UserAPIUtil.fetchUsers().then( users => {
    MessageAPIUtil.fetchMessages().then( messages => {
      dispatch(receiveUsers(users));
      dispatch(receiveMessages(messages));
    });
  });
};
