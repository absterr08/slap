import React from 'react';
import ChannelContainer from '../channel/channel_container';
import Sidebar from './channel_sidebar/sidebar';
import DMForm from '../modals/DM_form';
import ChannelForm from '../modals/channel_form';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentWillMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
  }

  componentDidMount() {
    this.props.fetchMessages().then(() => this.props.fetchUsers());
  }

  render() {
    console.log('rendering home');
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
