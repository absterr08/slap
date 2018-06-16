import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const fetchMessages = () => dispatch => (
  MessageApiUtil.fetchMessages().then( (messages) => dispatch(receiveMessages(messages)))
);

export const fetchDmMessages = id => dispatch => (
  MessageApiUtil.fetchDmMessages(id).then( (messages) => dispatch(receiveMessages(messages)))
);

export const fetchChannelMessages = id => dispatch => (
  MessageApiUtil.fetchChannelMessages(id).then( (messages) => dispatch(receiveMessages(messages)))
);

export const fetchMessage = (messageId) => dispatch => (
  MessageApiUtil.fetchMessage(messageId).then( (message) => dispatch(receiveMessage(message)))
);

export const updateMessage = (message) => dispatch => (
  MessageApiUtil.updateMessage(message).then( (message) => dispatch(receiveMessage(message)))
);
