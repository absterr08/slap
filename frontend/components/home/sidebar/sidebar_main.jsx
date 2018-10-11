import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { deleteDm } from '../../../actions/dm_actions';
import { receiveNewChannelModal } from '../../../actions/modal_actions';
import { subscribedChannels } from '../../../selectors/selectors';
import ChannelSearch from './channel_search';
import ChannelIndexItem from './channel_index_item';

const SidebarMain = ({ channels, dms, toggleModal, deleteChannel, deleteDm }) => {
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
          return <ChannelIndexItem
            key={ dm.id }
            channel={ dm }
            deleteDm={ deleteDm }
            iconType={ "dm-list-item-icon" }
            />
          })
        }
      </ul>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    channels: subscribedChannels(state),
    dms: Object.values(state.entities.dms)
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
