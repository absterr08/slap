import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels));
    const addMessage = this.props.addMessage;
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
