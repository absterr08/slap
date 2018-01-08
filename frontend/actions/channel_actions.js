import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

const receiveChannel = payload => (
  {
    type: RECEIVE_CHANNEL,
    payload
  }
)

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then( channels => dispatch(receiveChannels(channels)))
)

export const fetchChannel = (channelId) =>  dispatch => (
  ChannelApiUtil.fetchChannel(channelId).then( channel => dispatch(receiveChannel(channel)))
)

export const fetchChannelByName = (channelName) => dispatch => (
  ChannelApiUtil.fetchChannelByName(channelName).then( channel => dispatch(receiveChannel(channel)))
)