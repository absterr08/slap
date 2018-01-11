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
    // const addMessage = this.props.addMessage.bind(this);
    // this.props.fetchChannels().then(() => createChannelSubscriptions(this.props.channels, addMessage));
    this.props.fetchMessages();
    if (!this.props.match.params.channelId || this.props.match.params.channelId === "undefined") {
      debugger
      this.props.history.push(`/messages/${this.props.currentUser.channels[0].id}`);
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('compWIllReceieve');
    // if (!nextProps.match.params.channelId) {
    //   const channelId = parseInt(localStorage.getItem("currentChannel"));
    //   this.props.history.push(`/messages/${channelId}`);
    // } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
    //   console.log('case: next channel is different; fetching channel');
    //   this.props.fetchChannel(nextProps.match.params.channelId);
    // }
  }


  render() {
    console.log('rendering home');
    const channelForm = this.props.renderChannelForm ? <ChannelForm /> : <div></div>
  const dmForm = this.props.renderDMForm ? <DMForm /> : <div></div>
    // let channelContainer;
    // const pathChannel = this.props.match.params.channelId;
    // if (pathChannel) {
    //   channelContainer = <ChannelContainer channelId={pathChannel} />;
    // this breaks :((
    // } else if (localStorage.getItem("currentChannel")) {
    //   const channelId = parseInt(localStorage.getItem("currentChannel"));
    //   // debugger
    //   channelContainer = <ChannelContainer channelId={channelId} />;
    // } else if (this.props.defaultChannel) {
    //   channelContainer = <ChannelContainer channelId={this.props.defaultChannel} />;
    // }

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
