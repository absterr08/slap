export const fetchChannels = () => (
  $.ajax({
    url: `/api/channels`
  })
)

export const fetchChannel = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}`
  })
)

export const fetchChannelByName = (channelName) => (
  $.ajax({
    url: `/api/find_channel_by_name/${channelName}`
  })
)

export const createChannel = (channel) => (
  $.ajax({
    method: "POST",
    url: `/api/channels`,
    data: { channel }
  })
)
