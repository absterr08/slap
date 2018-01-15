# Slap

Check out the live site. [Slap!](https://aa-slap.herokuapp.com/)

Slap is a clone of Slack, a messaging platform for easy communication among busy teams.

### Technologies
* Rails
* React/Redux
* Websockets (ActionCable)


## Features

### Live Chat

Slap uses Websockets via Rails ActionCable to implement live chat. When a user logs in, they are subscribed to a server for every channel that they are a member of.


```
//frontend/components/home.jsx

componentWillMount() {
  const addMessage = this.props.addMessage.bind(this);
  this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
}
```


```
//frontend/util/channel_api_util.js

export const createChannelSubscriptions = (channels, addMessage) => {
  channels.forEach(channel => {
    App[`room${channel.channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channel.channel.id}, {
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
  });
};
```

When a message is sent, our channel's speak method creates the message in the database, and then that message is broadcasted and accessible through the App's received function. Here, we add the message to the Redux state by dispatching an action.

### Direct and Group Messaging

Users can publicly communicate in channels, or they can start direct/group messages with one or more other users. This is implemented by essentially creating a new private channel with only the users chosen as its subscribers.

## Future Features
* Private channels
* Message Reactions
* Notifications
