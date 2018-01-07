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

export const createChannel = (channel) => (
  $.ajax({
    method: "POST",
    url: `/api/channels`,
    data: { channel }
  })
)
