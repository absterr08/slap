import React from 'react';
import ChannelContainer from './channel/channel_container';
import Sidebar from './sidebar/sidebar';
import DMForm from '../modals/DM_form_container';
import ChannelForm from '../modals/channel_form';
import ChannelSearch from '../modals/channel_search';

import { createChannelSubscriptions } from '../../util/channel_api_util';

export default class Home extends React.Component {

  componentDidMount() {
    const addMessage = this.props.addMessage.bind(this);
    this.props.fetchChannelsAndDms().then(() => createChannelSubscriptions(this.props.channels.concat(this.props.dms), addMessage));
    this.props.fetchUsers();
    // this.props.setCurrentChannel(this.props.match.params.channelId)
  }

  componentDidUpdate() {
    // debugger
  }

  render() {
    if (this.props.loading) {
      // when removing a DM, 'currentChannel' is temporarily undefined until dispatching switchChannel
      // this causes the actual channel component to unmount and then remount when it shouldnt be
      return <div>Loading...</div>;
    }
    const channelForm = this.props.renderChannelForm ? <ChannelForm /> : <div></div>;
    const dmForm = this.props.renderDMForm ? <DMForm /> : <div></div>;
    const channelSearch = this.props.renderChannelSearch ? <ChannelSearch /> : <div></div>;
    return (
      <div className="main-container">
        {channelSearch}
        {channelForm}
        {dmForm}
        <Sidebar currentChannel={this.props.currentChannel} />
        <ChannelContainer channel={this.props.currentChannel} />
      </div>
    );
  }
}
