import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';

const SidebarMain = ({ channels, fetchChannels }) => {
  return (
    <ul className="channel-list">
      { channels.map((channel, idx) => {
        return <ChannelIndexItem key={idx} channel={ channel } />
        })
      }
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
