import React from 'react';

class ChannelDetail extends React.Component {

  render() {
    return(
      <div className="channel-detail-container">
        <div className="channel-detail-header">
          About this.props.channelName
        </div>
      </div>
    )
  }
};

export default ChannelDetail;
