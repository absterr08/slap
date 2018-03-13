import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { selectDmNames } from '../../../util/channel_api_util';



class ChannelIndexItem extends React.Component {

  toggleActive(e) {
    $('.selected-li').removeClass('selected-li');
    $(e.currentTarget).addClass('selected-li');
  }



  deleteChannel() {
    // TODO: redirect to default after delete
    this.props.deleteChannel(this.props.channel.id);
    // .then( () =>
    // this.props.history.push(`/messages/${this.props.defaultChannel}`))
  }

  render() {
    const channelInfo = this.props.channel;
    // debugger
    let title, iconType;
    let deleteButton = <div></div>;
    if (this.props.currentUser) {
      title = selectDmNames(this.props.channel, this.props.currentUser.username).join(', ')
      iconType = "dm-list-item-icon"
      deleteButton = <div className="delete-dm" onClick={this.deleteChannel.bind(this)}>x</div>
    } else {
      title = channelInfo.name;
      iconType = "channel-list-item-icon"
    }
    return (
        <Link to={ `/messages/${channelInfo.id}` } >
          <li className="channel-list-item" onClick={this.toggleActive}>
            <div className="channel-list-item-container">
              <div className={iconType}></div>
              <div className="channel-list-item-name">{title}</div>
            </div>
            {deleteButton}
          </li>
        </Link>
    )
  }
}

export default withRouter(ChannelIndexItem);
