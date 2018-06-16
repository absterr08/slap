import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { selectOtherUsernames} from '../../../selectors/selectors';

class DmIndexItem extends React.Component {

  toggleActive(e) {
    $('.selected-li').removeClass('selected-li');
    $(e.currentTarget).addClass('selected-li');
  }

  deleteChannel() {
    // TODO: redirect to default after delete
    this.props.deleteDm(this.props.dm.id).then(() =>
      this.props.history.push(`/channels/${this.props.defaultChannel}`
    ));
  }

  render() {
    const dmInfo = this.props.dm;
      const title = this.props.otherUsernames;
      const iconType = "dm-list-item-icon";
      const deleteButton = <div className="delete-dm" onClick={this.deleteChannel.bind(this)}>x</div>;
    return (
        <Link to={ `/dms/${dmInfo.id}` } >
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

const mapStateToProps = (state, ownProps) => {
  return {
    otherUsernames: selectOtherUsernames(state, ownProps.dm).join(', '),
    defaultChannel: state.ui.defaultChannel
  };
};

export default withRouter(connect(mapStateToProps, null)(DmIndexItem));
