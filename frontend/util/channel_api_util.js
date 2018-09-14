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

// dilemma: have one subscription for all channels? or one subscription per channel?
// one per channel annoying because every message broadcasts to every instance of room_channel

export const createChannelSubscriptions = (channels, addMessage) => {
  channels.forEach( channel => {
      createChannelSubscription(channel.id, addMessage);
    }
  );
};

export const createChannelSubscription = (channelId, addMessage) => {
  App[`room${channelId}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channelId}, {
        received: function(data) {
          const messageChannelId = JSON.parse(data.message).messageable_id;
          const channelId = JSON.parse(this.identifier).room; //necessary???
          if (messageChannelId === channelId) {
            addMessage(JSON.parse(data.message));
          }
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
