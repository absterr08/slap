import React from 'react';

import ChannelSidebarHeader from './sidebar_header';
import ChannelSidebarMain from './sidebar_main';


export default ({ currentChannel }) => (
  <div className="channel-sidebar">
    <ChannelSidebarHeader />
    <ChannelSidebarMain currentChannel={currentChannel} />
  </div>
)
