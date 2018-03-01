import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';
import DMForm from '../modals/DM_form';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    console.log('home compWillMount');
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
  }

  componentDidMount() {
    console.log('home compDidMount');
    this.props.fetchMessages();
    // handle messed up frontend route
    if (!this.props.match.params.channelId || this.props.match.params.channelId === "undefined") {
      this.props.history.push(`/messages/${this.props.currentUser.channels[0].id}`);
    }
    // debugger
  }

  render() {
    console.log('home render');
    const channelForm = this.props.renderChannelForm ? <ChannelForm /> : <div></div>
    const dmForm = this.props.renderDMForm ? <DMForm /> : <div></div>

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
