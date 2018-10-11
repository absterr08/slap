import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { selectOtherUsernames } from '../../../selectors/selectors';
import { switchChannel } from '../../../actions/channel_actions';

class ChannelIndexItem extends React.Component {

  isCurrentChannel() {
    const { channelType, id } = this.props.currentChannel;
    return (this.props.channel.channelType === channelType && this.props.channel.id === id);
  }

  deleteChannel(e) {
    e.stopPropagation();
    this.props.deleteDm(this.props.channel.id).then(() => {
      // not great that im doing both here?
      this.props.switchChannel("Channel", this.props.defaultChannel)();
      this.props.history.push(`/messages/${this.props.defaultChannel}`)
    });
  }

  render() {
    const channel = this.props.channel;
    let title, deleteButton;

    if (channel.channelType === "Dm") {
      deleteButton = <div className="delete-dm" onClick={this.deleteChannel.bind(this)}>x</div>;
      title = this.props.otherUsernames;
    } else {
      deleteButton = <div></div>;
      title = channel.name;
    }

    let className = "channel-list-item";
    if (this.isCurrentChannel()) {
      className="channel-list-item selected-li";
    }

    return (
        <Link to={`/messages/${channel.id}`}
          onClick={this.props.switchChannel(channel.channelType, channel.id)}>
          <li className={className}>
            <div className="channel-list-item-container">
              <div className={this.props.iconType}></div>
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
    otherUsernames: selectOtherUsernames(state, ownProps.channel).join(', '),
    defaultChannel: state.ui.defaultChannel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchChannel: (type, id) => () => dispatch(switchChannel(type, id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));
