import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';

export default class Home extends React.Component {

  componentWillMount() {
    if (typeof App !== 'undefined'){
      const addMessage = this.props.addMessage;
      App.room = App.cable.subscriptions.create("RoomChannel", {
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

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <div className="main-container">
        <div className="channel-sidebar">
          <ChannelSidebarHeader />
          <ChannelSidebarMain channels={this.props.channels} />
        </div>
        <ChannelContainer />
      </div>
    )
  }
}
