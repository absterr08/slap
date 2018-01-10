import { values } from 'lodash';

export const selectCurrentChannelMessages = state => {
  // debugger
  const allMessages = state.entities.messages;
  const channelMessageIds = values(state.ui.currentChannel.messages);
  const filteredMessages = Object.assign({}, allMessages);
  channelMessageIds.map( id => delete filteredMessages[id]);
  return filteredMessages;
};
