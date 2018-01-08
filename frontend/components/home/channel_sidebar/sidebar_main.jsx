import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';

const SidebarMain = ({ channels }) => {
  return (
    <ul className="channel-list">
      <ul className="sidebar-label">
        <li>Channel</li>
        <li><div className="add-button">+</div></li>
      </ul>
      <ul className="channel-sublist">
        { channels.map((channel, idx) => {
          return <ChannelIndexItem key={ idx } channel={ channel } />
          })
        }
      </ul>
      <ul className="sidebar-label">
        <li>Direct Messages</li>
        <li><div className="add-button">+</div></li>
      </ul>
      <ul className="channel-sublist">
      </ul>
    </ul>
  )
}













const mapStateToProps = state => {
  return {
    // channels: values(state.entities.channels)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarMain);
