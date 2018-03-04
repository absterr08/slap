import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';
import DMForm from '../modals/DM_form';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    console.log('home WillMount');
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
  }

  componentDidMount() {
    console.log('home DidMount');
    this.props.fetchUsers().then( () => this.props.fetchMessages());
  }

  componentWillReceiveProps(nextProps) {
    console.log('home WillReceieveProps');
    // handle messed up url
    if (!nextProps.match.params.channelId) {
      const channelId = parseInt(localStorage.getItem("currentChannel"));
      this.props.history.push(`/messages/${channelId}`);
    } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      console.log(`case: next channel is different; prev: ${this.props.match.params.channelId}, next: ${nextProps.match.params.channelId} `);
      this.props.fetchChannel(nextProps.match.params.channelId);
    }
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
