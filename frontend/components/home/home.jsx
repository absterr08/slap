import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
    this.props.fetchUsers();
    this.props.fetchMessages();
    this.props.fetchChannel(this.props.match.params.channelId)
  }

  componentDidMount() {
    // debugger
    // this.props.fetchUsersThenMessagesThenChannel(this.props.params.match.channelId);
    // this.props.fetchUsers();
    // this.props.fetchMessages();
    // this.props.fetchChannel(this.props.match.params.channelId)
  }


  render() {
    console.log('rendering home')
    let channelContainer;
    const pathChannel = this.props.match.params.channelId;
    if (pathChannel) {
      channelContainer = <ChannelContainer channelId={pathChannel} />;
    // this breaks :((
    // } else if (localStorage.getItem("currentChannel")) {
    //   const channelId = parseInt(localStorage.getItem("currentChannel"));
    //   // debugger
    //   channelContainer = <ChannelContainer channelId={channelId} />;
    } else if (this.props.defaultChannel) {
      channelContainer = <ChannelContainer channelId={this.props.defaultChannel} />;
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
