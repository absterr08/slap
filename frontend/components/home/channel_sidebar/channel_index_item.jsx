import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { selectDmUsernames } from '../../../selectors/user_selectors';


class ChannelIndexItem extends React.Component {

  toggleActive(e) {
    // move this logic outside
    $('.selected-li').removeClass('selected-li');
    $(e.currentTarget).addClass('selected-li');
  }



  deleteChannel() {
    this.props.deleteChannel(this.props.channel.channel.id).then( () =>
    this.props.history.push(`/messages/${this.props.defaultChannel}`))
  }

  render() {
    const deleteButton = this.props.channel.is_dm
      ? <div className="delete-dm" onClick={this.deleteChannel.bind(this)}>x</div>
      : <div></div>
    return (
        <Link to={ `/messages/${this.props.channel.id}` } >
          <li className="channel-list-item" onClick={ this.toggleActive }>
            <div className="channel-list-item-container">
              <div className={this.props.iconType}></div>
              <div className="channel-list-item-name">{this.props.title}</div>
            </div>
            {deleteButton}
          </li>
        </Link>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  const title = ownProps.title
  ? ownProps.title
  : selectDmUsernames(state, ownProps.channel)
  return {
    title
  }
}

export default withRouter(connect(mapStateToProps, null)(ChannelIndexItem));
