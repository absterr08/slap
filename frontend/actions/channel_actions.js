import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const JOIN_CHANNEL = "JOIN_CHANNEL";
export const LEAVE_CHANNEL = "LEAVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const SWITCH_CHANNEL = "SWITCH_CHANNEL";
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

const joinChannelAction = (id, currUserId) => ({
  type: JOIN_CHANNEL,
  id,
  currUserId
});

const leaveChannelAction = (id, currUserId) => ({
  type: LEAVE_CHANNEL,
  id,
  currUserId
});

export const switchChannel = (channelType, channelId) => {
  return {
    type: SWITCH_CHANNEL,
    channelType,
    channelId
  };
};

export const receiveChannelResults = channels => {
  return {
    type: RECEIVE_SEARCHED_CHANNELS,
    channels
  }
};

export const clearSearchedChannels = () => {
  return {
    type: CLEAR_SEARCHED_CHANNELS
  };
};

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then( channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = (channelId) =>  dispatch => (
  ChannelApiUtil.fetchChannel(channelId).then( channel => dispatch(receiveChannel(channel)))
);

export const joinChannel = (channelId, currUserId) => dispatch => (
  ChannelApiUtil.createChannelSub(channelId).then( () => (
    dispatch(joinChannelAction(channelId, currUserId))))
);

export const leaveChannel = (channelId, currUserId) => dispatch => (
  ChannelApiUtil.deleteChannelSub(channelId).then( () => dispatch(leaveChannelAction(channelId, currUserId)))
);

export const createChannel = channel => dispatch => (
  ChannelApiUtil.createChannel(channel).then( channel => {
    dispatch(receiveChannel(channel));
  })
);

export const deleteChannel = channelId => dispatch => (
  ChannelApiUtil.deleteChannel(channelId).then( channel => {
    dispatch(removeChannel(channel));
    dispatch(leaveChannelAction(channel.id));
  })
);

export const searchChannels = query => dispatch => (
  ChannelApiUtil.searchChannels(query).then( results => dispatch(receiveChannelResults(results)))
);
