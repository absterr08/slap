import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ChannelSidebarHeader from './channel_sidebar/sidebar_header';
import ChannelSidebarMain from './channel_sidebar/sidebar_main';
import DMForm from '../modals/DM_form';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    console.log('rendering home');
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
    )
  }
}
