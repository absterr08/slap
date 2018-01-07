import React from 'react';
// import 


const ChannelIndexItem = ({ channel }) => {
  return (
    <li className="channel-list-item">
      { channel.name }
    </li>
  )
}

export default ChannelIndexItem;
