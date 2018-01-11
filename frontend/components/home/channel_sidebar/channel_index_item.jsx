import React from 'react';
import { Link } from 'react-router-dom';


const ChannelIndexItem = ({ channel }) => {
  const channelInfo = channel.channel;
  return (
    <li className="channel-list-item">
      <Link to={ `/messages/${channelInfo.id}` }># {channelInfo.name}</Link>
    </li>
  )
}

export default ChannelIndexItem;
