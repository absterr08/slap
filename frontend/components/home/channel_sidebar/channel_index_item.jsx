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
      <Link to={ `/messages/${channelInfo.id}` }>
        <li className="channel-list-item">
          <div className="channel-list-item-container">
            <div className="channel-list-item-logo"></div>
            <div className="chennel-list-item-name">{title}</div>
          </div>
        </li>
      </Link>
  )
}

export default ChannelIndexItem;
