import React from 'react';

export default class ChannelHeader extends React.Component {

  render() {
    return (
      <div className="channel-header">
        <div className="channel-header-content">
          { this.props.icon }
          <div>{ this.props.title }</div>
        </div>
        <div className="channel-header-description">
          { this.props.description }
        </div>
      </div>
    )
  }
}
