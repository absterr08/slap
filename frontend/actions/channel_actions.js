import * as ChannelAPIUtil from '../util/channel_api_util';

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
  ChannelAPIUtil.fetchChannels().then( channels => dispatch(receiveChannels(channels)))
)

export const fetchChannel = (channelId) =>  dispatch => (
  ChannelAPIUtil.fetchChannel(channelId).then( channel => dispatch(receiveChannel(channel)))
)
