import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receieveChannels = channels => (
  {
    type: RECEIVE_CHANNELS,
    channels
  }
)

const receieveChannel = payload => (
  {
    type: RECEIVE_CHANNEL,
    payload
  }
)

export const fetchChannels = () => (
  ChannelAPIUtil.fetchChannels().then( channels => receieveChannels(channels))
)

export const fetchChannel = (channelId) => (
  ChannelAPIUtil.fetchChannel(channelId).then( channel => receieveChannel(channel))
)
