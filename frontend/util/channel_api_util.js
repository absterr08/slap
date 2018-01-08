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

// probably bad practice to put this here since addMessage is dispatching stuff?
export const createChannelSubscriptions = (channels, addMessage) => {
  if (typeof App !== 'undefined'){
    channels.forEach(channel => {
        App[`room${channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channel.id}, {
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
    )
  }
}
export const createChannelSubscription = ()  => {
  if (typeof App !== 'undefined'){
      App.room = App.cable.subscriptions.create({channel: "RoomChannel", room: "coolroom"}, {
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
}
