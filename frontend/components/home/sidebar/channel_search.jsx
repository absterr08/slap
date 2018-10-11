import React from 'react';
import { openChannelSearchModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const ChannelSearch = ({ openChannelSearchModal }) => {
  return(
    <input 
      className="channel-search"
      placeholder="Jump to..."
      onClick={openChannelSearchModal}
      />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    openChannelSearchModal: () => dispatch(openChannelSearchModal())
  }
}

export default connect(null, mapDispatchToProps)(ChannelSearch)
