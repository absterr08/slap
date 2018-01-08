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
    this.props.fetchChannels();
  }


  render() {
    let channelContainer;
    const pathChannel = this.props.match.params.channelId;
    if (pathChannel) {
      channelContainer = <ChannelContainer channelId={pathChannel} />
    } else if (this.props.defaultChannel) {
      channelContainer = <ChannelContainer channelId={this.props.defaultChannel} />
    }

    return (
      <div className="main-container">
        <div className="channel-sidebar">
          <ChannelSidebarHeader />
          <ChannelSidebarMain channels={this.props.channels} />
        </div>
        {channelContainer}
      </div>
    )
  }
}
