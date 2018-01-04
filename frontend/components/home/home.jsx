import React from 'react';
import ChannelContainer from '../channels/channel_container';
import Greeting from './greeting';

export default class Home extends React.Component {

  componentWillMount() {

    this.props.fetchMessages(this.props.messages);

    if (typeof App !== 'undefined'){
      App.room = App.cable.subscriptions.create("RoomChannel", {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          return store.dispatch(addMessage(data['message']));
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
    debugger
    return (
      <div>
        <Greeting />
        <ChannelContainer messages={this.props.messages} />
      </div>
    )
  }
}
