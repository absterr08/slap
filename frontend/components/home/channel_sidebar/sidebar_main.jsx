import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import { receiveNewChannelModal } from '../../../actions/modal_actions';
import ChannelIndexItem from './channel_index_item';
import { selectDms, selectPublicChannels } from '../../../selectors/channel_selectors';
import { selectChannelUsernames, selectDmUsernames } from '../../../selectors/user_selectors';
import ChannelSearch from './channel_search';

const SidebarMain = ({ channels, dms, toggleModal, currentUser, deleteChannel}) => {

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
          return <ChannelIndexItem key={ dm.id }
            channel={ dm }
            iconType={ "dm-list-item-icon" }
            deleteChannel={ deleteChannel }
            currentUser={ currentUser.user }
            defaultChannel={ currentUser.defaultChannel} />
          })
        }
      </ul>
    </ul>
  )
}


const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    channels: selectPublicChannels(state),
    dms: selectDms(state),
    currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    toggleModal: modalType => () => dispatch(receiveNewChannelModal(modalType)),
    deleteChannel: id => dispatch(deleteChannel(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarMain);
