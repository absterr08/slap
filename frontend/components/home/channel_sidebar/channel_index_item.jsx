import React from 'react';
import { Link } from 'react-router-dom';
import { selectDmNames } from '../../../util/channel_api_util';



const ChannelIndexItem = ({ channel, currentUsername }) => {
  const channelInfo = channel.channel;
  let title, iconType;
  if (currentUsername) {
    title = selectDmNames(channel, currentUsername).join(', ')
    iconType = "dm-list-item-icon"
  } else {
    title = channelInfo.name;
    iconType = "channel-list-item-icon"
  }
  return (
      <Link to={ `/messages/${channelInfo.id}` }>
        <li className="channel-list-item">
          <div className="channel-list-item-container">
            <div className={iconType}></div>
            <div className="chennel-list-item-name">{title}</div>
          </div>
        </li>
      </Link>
  )
}

export default ChannelIndexItem;
