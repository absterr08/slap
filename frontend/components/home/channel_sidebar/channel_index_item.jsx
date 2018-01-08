import React from 'react';
import { Link } from 'react-router-dom';


const ChannelIndexItem = ({ channel }) => {
  return (
    <li className="channel-list-item">
      <Link to={ `/messages/${channel.id}` }>{channel.name}</Link>
    </li>
  )
}

export default ChannelIndexItem;