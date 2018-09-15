import React from 'react';
import { connect } from 'react-redux';
import ChannelSearch from './channel_search';

import { values } from 'lodash';
import { deleteChannel } from '../../../actions/channel_actions';
import { deleteDm } from '../../../actions/dm_actions';
import { receiveNewChannelModal } from '../../../actions/modal_actions';
import ChannelIndexItem from './channel_index_item';
import DmIndexItem from './dm_index_item';
import { selectDms, subscribedChannels } from '../../../selectors/selectors';

const SidebarMain = ({ channels, dms, toggleModal, currentUser, deleteChannel, deleteDm }) => {
  return (
    <ul className="channel-list">
      <ChannelSearch />
      <ul className="sidebar-label" onClick={toggleModal("channel")}>
        <li>Channels</li>
        <li><div className="add-button">+</div></li>
      </ul>

      <ul className="channel-sublist">
        { channels.map((channel, idx) => {
          return <ChannelIndexItem
            key={ idx }
            channel={ channel }
            iconType={ "channel-list-item-icon" }
            title={ channel.name }
            />
          })
        }
      </ul>

      <ul className="sidebar-label" onClick={toggleModal("DM")}>
        <li>Direct Messages</li>
        <li><div className="add-button">+</div></li>
      </ul>

      <ul className="channel-sublist">
        { dms.map((dm, idx) => {
          return <DmIndexItem key={ dm.id }
            dm={ dm }
            deleteDm={ deleteDm } />
          })
        }
      </ul>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    channels: subscribedChannels(state),
    dms: Object.values(state.entities.dms),
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: modalType => () => dispatch(receiveNewChannelModal(modalType)),
    deleteChannel: id => dispatch(deleteChannel(id)),
    deleteDm: id => dispatch(deleteDm(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMain);
