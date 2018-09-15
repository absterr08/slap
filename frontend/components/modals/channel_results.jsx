import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSearchedChannels } from '../../selectors/selectors';
import { closeChannelSearchModal } from '../../actions/modal_actions';
import { switchChannel } from '../../actions/channel_actions';

const Results = ({ channels, closeModal, switchChannel }) => {
  if (!channels.length) return <div></div>;
  return (
    <ul className="channel-results">
      {
        channels.map(channel => {
          console.log(channel.name)
          return(
            <Link key={channel.id} to={`/messages/${channel.id}`}>
              <li onClick={() => {closeModal(); switchChannel(channel.id)}}>
                # {channel.name}
              </li>
            </Link>
          );
        })
      }
    </ul>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    channels: selectSearchedChannels(state)
  };
};

const mapDispatchToProps  = dispatch => {
  return {
    closeModal: () => dispatch(closeChannelSearchModal()),
    switchChannel: (id) => dispatch(switchChannel('Channel', id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
