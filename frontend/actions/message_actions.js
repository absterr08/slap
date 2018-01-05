import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveMessages = ({messages}) => {
  let messagesObj = {};
  messages.map((msg, idx) => messagesObj[idx] = messages[idx]);
  return {
    type: RECEIVE_MESSAGES,
    messages: messagesObj
  };
};

export const receiveMessage = (message) => (
  {
    type: RECEIVE_MESSAGE,
    message
  }
);

const cb = (arg) => {
  debugger
}


export const fetchMessages = () => dispatch => (
  MessageAPIUtil.fetchMessages().then( (messages) => dispatch(receiveMessages(messages)))
);

export const fetchMessage = (messageId) => dispatch => (
  MessageAPIUtil.fetchMessage(messageId).then( (message) => dispatch(receiveMessage(message)))
);

export const addLastMessage = () => dispatch => (
  // MessageAPIUtil.getLastMessageId().then( (messageId) => dispatch(fetchMessage(messageId)))
  MessageAPIUtil.getLastMessageId().then( (messageId) => cb(messageId))
);

export const updateMessage = (message) => dispatch => (
  MessageAPIUtil.updateMessage(message).then( (message) => dispatch(receiveMessage(message)))
);
