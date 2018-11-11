export const fetchChannels = () => (
  $.ajax({
    url: `/api/channels`
  })
);

export const fetchChannel = (channelId) => (
  $.ajax({
    url: `/api/channels/${channelId}`
  })
);

export const createChannel = (channel) => (
  $.ajax({
    method: "POST",
    url: `/api/channels`,
    data: { channel }
  })
);

export const createChannelSub = (channelId) => (
  $.ajax({
    method: "POST",
    url: `/api/channel_subscriptions`,
    data: { channel_id: channelId }
  })
)

export const deleteChannelSub = (channelId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/channel_subscriptions/${channelId}`
  })
)

export const deleteChannel = (channelId) => (
  $.ajax({
    method: "DELETE",
    url: `api/channels/${channelId}`
  })
);

export const searchChannels = query => (
  $.ajax({
    method: "GET",
    url: `api/channels/search`,
    data: { query }
  })
)

export const createChannelSubscriptions = (channels, addMessage) => {
  channels.forEach( channel => {
      createChannelSubscription(channel.id, addMessage);
    }
  );
};

export const createChannelSubscription = (channelId, addMessage) => {
  App[`room${channelId}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channelId}, {
        received: function(data) {
          addMessage(JSON.parse(data.message));
        },
        speak: function(message) {
          return this.perform('speak', {
            message: message
          });
        }
      });
    };
//
// export const selectDmNames = (dm, username) => {
//   const selectedNames = []
//   dm.usernames.map(name => {
//     if (name != username) {
//       selectedNames.push(name)
//     }
//   })
//   return selectedNames;
// }
