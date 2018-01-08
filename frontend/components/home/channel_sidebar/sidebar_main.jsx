import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';

const SidebarMain = ({ channels }) => {
  return (
    <ul className="channel-list">
      <ul className="channel-sublist">
        <li className="sidebar-label">Channels</li>
        { channels.map((channel, idx) => {
          return <ChannelIndexItem key={ idx } channel={ channel } />
          })
        }
      </ul>
      <ul className="channel-sublist">
        <li className="sidebar-label">Direct Messages</li>
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
