import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannels = channels => {
  // debugger
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

const receiveChannel = payload => {
  // debugger
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
;}

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then( channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = (channelId) =>  dispatch => (
  ChannelApiUtil.fetchChannel(channelId).then( channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelApiUtil.createChannel(channel).then( channel => dispatch(receiveChannel(channel)))
);
