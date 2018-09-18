import React from 'react';
import { connect } from 'react-redux';
import { closeChannelSearchModal } from '../../actions/modal_actions';
import { searchChannels, clearSearchedChannels } from '../../actions/channel_actions';
import Results from './channel_results';

class ChannelSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.inputRef.focus();
  }

  handleChange(e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({query: e.target.value}, () => {
      this.timeout = setTimeout( () => {
        this.props.searchChannels(this.state.query)
      }, 500);
    });
  }



  render() {
    const searching = this.state.query === '';
    return (
      <div className='channel-search-modal-background' onClick={this.props.closeChannelSearchModal}>
        <div className='channel-search-modal' onClick={e => e.stopPropagation()}>
          <input
            placeholder='find a channel!'
            value={this.state.query}
            onChange={this.handleChange}
            ref={(input) => this.inputRef = input}/>
          <Results />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    searchChannels: query => dispatch(searchChannels(query)),
    closeChannelSearchModal: () => dispatch(closeChannelSearchModal()),
    clearSearchResults: () => dispatch(clearSearchedChannels())
  }
}

export default connect(null, mapDispatchToProps)(ChannelSearch);
