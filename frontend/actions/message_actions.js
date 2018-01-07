import * as MessageAPIUtil from '../util/message_api_util';

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
  }
};

export const fetchMessages = () => dispatch => (
  MessageAPIUtil.fetchMessages().then( (messages) => dispatch(receiveMessages(messages)))
);

export const fetchMessage = (messageId) => dispatch => (
  MessageAPIUtil.fetchMessage(messageId).then( (message) => dispatch(receiveMessage(message)))
);

export const updateMessage = (message) => dispatch => (
  MessageAPIUtil.updateMessage(message).then( (message) => dispatch(receiveMessage(message)))
);
