import React from 'react';
import ChannelContainer from '../channels/channel_container';
import Greeting from './greeting';

export default class Home extends React.Component {

  componentWillMount() {

    if (typeof App !== 'undefined'){
      const addMessage = this.props.addMessage;
      App.room = App.cable.subscriptions.create("RoomChannel", {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          // addLastMessage();
          // debugger
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

  render() {
    return (
      <div className="main-container">
        <Greeting />
        <ChannelContainer />
      </div>
    )
  }
}
