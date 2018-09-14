import React from 'react';
import { connect } from 'react-redux';
import { selectSearchedChannels } from '../../selectors/selectors';

const Results = ({ channels }) => {
  return (
    <ul>
      {
        channels.map(channel => {
          console.log(channel.name)
          return(
            <li>
              {channel.name}
            </li>
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

export default connect(mapStateToProps)(Results);
