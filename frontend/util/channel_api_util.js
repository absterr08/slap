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
    method:"DELETE",
    url:`api/channels/${channelId}`
  })
)

// probably bad practice to put this here since addMessage is dispatching stuff?
export const createChannelSubscriptions = (channels, addMessage) => {
  // //debugger
  if (typeof App !== 'undefined'){
    channels.forEach(channel => {
        App[`room${channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channel.id}, {
          connected: function() {},
          disconnected: function() {},
          received: function(data) {
            const messageChannelId = JSON.parse(data.message).channel_id;
            const channelId = JSON.parse(this.identifier).room;
            if (messageChannelId === channelId) {
              addMessage(JSON.parse(data['message']));
            }
          },
          speak: function(message) {
            return this.perform('speak', {
              message: message
            });
          }
        });
      }
    );
  }
};

export const createChannelSubscription = (channelId, addMessage)  => {
  if (typeof App !== 'undefined'){
      App[`room${channelId}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channelId}, {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          addMessage(JSON.parse(data['message']));
        },
        speak: function(message) {
          return this.perform('speak', {
            message: message
          });
        }
      });
    }
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
