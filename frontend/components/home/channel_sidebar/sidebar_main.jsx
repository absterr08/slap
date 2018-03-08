import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchChannels, deleteChannel } from '../../../actions/channel_actions';
import { receiveNewChannelModal } from '../../../actions/modal_actions';
import ChannelIndexItem from './channel_index_item';
import { selectDms, selectPublicChannels } from '../../../selectors/selectors';

const SidebarMain = ({ channels, dms, toggleModal, currentUser, deleteChannel }) => {
  return (
    <ul className="channel-list">
      <ul className="sidebar-label" onClick={toggleModal("channel")}>
        <li>Channels</li>
        <li><div className="add-button">+</div></li>
      </ul>
      <ul className="channel-sublist">
        { channels.map((channel, idx) => {
          return <ChannelIndexItem key={ idx } channel={ channel } />
          })
        }
      </ul>
      <ul className="sidebar-label" onClick={toggleModal("DM")}>
        <li>Direct Messages</li>
        <li><div className="add-button">+</div></li>
      </ul>
      <ul className="channel-sublist">
        { dms.map((dm, idx) => {
          return <ChannelIndexItem key={ dm.channel.id }
            channel={ dm }
            deleteChannel={ deleteChannel }
            currentUser={ currentUser.user } />
          })
        }
      </ul>
    </ul>
  )
}


const mapStateToProps = state => {
  return {
    channels: values(selectPublicChannels(state)),
    dms: values(selectDms(state)),
    currentUser: state.session.currentUser
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
