import React from 'react';
import { Link } from 'react-router-dom';
import { selectDmNames } from '../../../util/channel_api_util';



class ChannelIndexItem extends React.Component {

  toggleActive(e) {
    $('.selected-li').removeClass('selected-li');
    $(e.currentTarget).addClass('selected-li');
  }

  toggleDeleteButton(e) {
    
  }

  deleteChannel() {

  }

  render() {
    const channelInfo = this.props.channel.channel;
    let title, iconType;
    let deleteButton = <div></div>;
    if (this.props.currentUsername) {
      title = selectDmNames(this.props.channel, this.props.currentUsername).join(', ')
      iconType = "dm-list-item-icon"
      deleteButton = <div className="delete-dm" onClick={this.deleteChannel}>x</div>
    } else {
      title = channelInfo.name;
      iconType = "channel-list-item-icon"
    }
    return (
        <Link to={ `/messages/${channelInfo.id}` } onMouseOver={this.toggleDeleteButton}>
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

export default ChannelIndexItem;
