import React from 'react';
import ChannelContainer from '../channel/channel_container';
import Sidebar from './channel_sidebar/sidebar';
import DMForm from '../modals/DM_form_container';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentDidMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchUsers().then(
      () => this.props.fetchMessages().then(
        () => this.props.fetchChannels().then(
          () => {
            createChannelSubscriptions(this.props.channels, addMessage);
            this.props.changeChannel(this.props.match.params.channelId);
          }
        )
      )
    );
  }

  render() {
    const channelForm = this.props.renderChannelForm ? <ChannelForm /> : <div></div>
    const dmForm = this.props.renderDMForm ? <DMForm /> : <div></div>

    return (
      <div className="main-container">
        {channelForm}
        {dmForm}
        <Sidebar />
        <ChannelContainer />
      </div>
    )
  }
}
