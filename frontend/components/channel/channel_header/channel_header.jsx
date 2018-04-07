import React from 'react';

const ChannelHeader = ({ icon, description, title }) => {
  return (
    <div className="channel-header">
      <div className="channel-header-content">
        { icon }
        <div>{ title }</div>
      </div>
      <div className="channel-header-description">
        { description }
      </div>
    </div>
  )
};

export default ChannelHeader;
