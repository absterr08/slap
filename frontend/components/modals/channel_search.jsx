import React from 'react';
import { connect } from 'react-redux';
import { closeChannelSearchModal } from '../../actions/modal_actions';

class ChannelSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='channel-search-modal-background' onClick={this.props.closeChannelSearchModal}>
        <div className='channel-search-modal'>
          <input placeholder='find a channel!'/>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    closeChannelSearchModal: () => dispatch(closeChannelSearchModal())
  }
}

export default connect(null, mapDispatchToProps)(ChannelSearch);
