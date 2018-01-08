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

export const createChannelSubscriptions = channels => {
  // debugger
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
  debugger
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
