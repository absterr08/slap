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
    let deleteButton = <div></div>;
    const title = channelInfo.name;
    const iconType = "channel-list-item-icon";
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
    );
  }
}

export default withRouter(ChannelIndexItem);
