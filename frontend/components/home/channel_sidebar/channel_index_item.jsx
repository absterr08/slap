import React from 'react';
import { Link } from 'react-router-dom';
import { selectDmNames } from '../../../util/channel_api_util';



const ChannelIndexItem = ({ channel, currentUsername }) => {
  const channelInfo = channel.channel;
  let title;
  if (currentUsername) {
    title = selectDmNames(channel, currentUsername).join(', ')

  } else {
    title = channelInfo.name;
  }
  return (
    <li className="channel-list-item">
      <Link to={ `/messages/${channelInfo.id}` }># {title}</Link>
    </li>
  )
}

export default ChannelIndexItem;
