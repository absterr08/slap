import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';
import DMForm from '../modals/DM_form';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentDidMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
    this.props.fetchUsers().then( () => this.props.fetchMessages());
  }

  // should i put this in channel instead?
  componentWillReceiveProps(nextProps) {
    // handle messed up url
    if (!nextProps.match.params.channelId) {
      // const channelId = parseInt(localStorage.getItem("currentChannel"));
      // this.props.history.push(`/messages/${channelId}`);
    } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      const nextChannel = parseInt(nextProps.match.params.channelId);
      this.props.switchChannel(nextChannel);
    }
  }

  render() {
    const channelForm = this.props.renderChannelForm ? <ChannelForm /> : <div></div>;
    const dmForm = this.props.renderDMForm ? <DMForm /> : <div></div>;

    return (
      <div className="main-container">
        {channelForm}
        {dmForm}
        <div className="channel-sidebar">
          <ChannelSidebarHeader />
          <ChannelSidebarMain />
        </div>
        <ChannelContainer />
      </div>
    );
  }
}
