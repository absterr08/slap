import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ChannelIndexItem extends React.Component {

  isCurrentChannel() {
    const { type, id } = this.props.currentChannel;
    if (type == "channel" && id == this.props.channel.id) return true;
    return false;
  }

  deleteChannel() {
    // TODO: redirect to default after delete
    this.props.deleteChannel(this.props.channel.id);
    // .then( () =>
    // this.props.history.push(`/messages/${this.props.defaultChannel}`))
  }

  render() {
    const channelInfo = this.props.channel;
    let deleteButton = <div></div>;
    const title = channelInfo.name;
    const iconType = "channel-list-item-icon";
    let className = "channel-list-item";
    if (this.isCurrentChannel()) {
      className="channel-list-item selected-li";
    }
    return (
        <Link to={ `/channels/${channelInfo.id}` } >
          <li className={className}>
            <div className="channel-list-item-container">
              <div className={iconType}></div>
              <div className="channel-list-item-name">{title}</div>
            </div>
            {deleteButton}
          </li>
        </Link>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    defaultChannel: state.ui.defaultChannel,
    currentChannel: state.ui.currentChannel
  };
};
export default withRouter(connect(mapStateToProps, null)(ChannelIndexItem));
