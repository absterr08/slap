import React from 'react';
import { connect } from 'react-redux';
import { closeChannelSearchModal } from '../../actions/modal_actions';
import { searchChannels } from '../../actions/channel_actions';
import Results from './channel_results';

class ChannelSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    // if this.timeOut  
    this.setState({query: e.target.value});
  }



  render() {
    return (
      <div className='channel-search-modal-background' onClick={this.props.closeChannelSearchModal}>
        <div className='channel-search-modal' onClick={e => e.stopPropagation()}>
          <input placeholder='find a channel!' value={this.state.query} onChange={this.handleChange}/>
          <Results />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    searchChannels: query => dispatch(searchChannels(query)),
    closeChannelSearchModal: () => dispatch(closeChannelSearchModal())
  }
}

export default connect(null, mapDispatchToProps)(ChannelSearch);
