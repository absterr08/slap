import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import { receiveMessage } from '../../actions/message_actions';
import { receiveChannel } from '../../actions/channel_actions';


const ChannelSubscriptions = ({ channels, addMessage, addChannel, currentUser }) => {
  if (typeof App !== 'undefined'){
    channels.forEach(channel => {
        App[`room${channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: channel.id}, {
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
    //
    // App.channels = App.cable.subscriptions.create({channel: "RoomChannel", room: "channels"}, {
    //   received: function(data) {
    //     //debugger
    //     const channelId = JSON.parse(data).id;
    //     if (currentUser.channels.includes(channelId)) {
    //       addChannel(JSON.parse(data['channel']));
    //     }
    //   },
    //   addChannel: function(channel) {
    //     return this.perform('add_channel', {
    //       channel: channel
    //     });
    //   }
    // });
  }
  return (
    <div></div>
  )
};

const mapStateToProps = state => (
  {
    channels: values(state.entities.channels),
    currentUser: state.session.currentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    addMessage: message => dispatch(receiveMessage(message)),
    addChannel: channel => dispatch(receiveChannel(channel))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSubscriptions);
