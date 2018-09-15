import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const SWITCH_CHANNEL = "SWITCH_CHANNEL";
export const SWITCH_DM = "SWITCH_DM";
export const RECEIVE_SEARCHED_CHANNELS = "RECEIVE_SEARCHED_CHANNELS";
export const CLEAR_SEARCHED_CHANNELS = "CLEAR_SEARCHED_CHANNELS";

const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  };
};

const removeChannel = channel => {
  return {
    type: REMOVE_CHANNEL,
    channel
  };
};

export const switchChannel = (channelType, channelId) => {
  console.log('switching channel')
  return {
    type: SWITCH_CHANNEL,
    channelType,
    channelId
  };
};

// export const switchChannel = (channelId) => {
//   return {
//     type: SWITCH_CHANNEL,
//     channelId
//   };
// };

export const switchDm = (channelId) => {
  return {
    type: SWITCH_DM,
    channelId
  };
};

export const receiveChannelResults = channels => {
  return {
    type: RECEIVE_SEARCHED_CHANNELS,
    channels
  }
}

export const clearSearchedChannels = () => {
  return {
    type: CLEAR_SEARCHED_CHANNELS
  };
}

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then( channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = (channelId) =>  dispatch => (
  ChannelApiUtil.fetchChannel(channelId).then( channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelApiUtil.createChannel(channel).then( channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = channelId => dispatch => (
  ChannelApiUtil.deleteChannel(channelId).then( channel => dispatch(removeChannel(channel)))
);

export const searchChannels = query => dispatch => (
  ChannelApiUtil.searchChannels(query).then( results => dispatch(receiveChannelResults(results)))
)
