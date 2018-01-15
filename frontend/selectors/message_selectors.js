import { values } from 'lodash';

export const selectCurrentChannelMessages = state => {
  const allMessages = state.entities.messages;
  const currentChannelId = state.ui.currentChannel;
  const channelMessages = {};
  Object.keys(allMessages).map( id =>  {
    let intId = parseInt(id)
    if (allMessages[id].channel_id == currentChannelId) {
      channelMessages[id] = allMessages[id];
    }
  });
  return values(channelMessages);
};
