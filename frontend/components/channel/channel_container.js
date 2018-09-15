import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectOtherUsernames, selectCurrentChannel } from '../../selectors/selectors';
import { fetchMessages } from '../../actions/message_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  const channel = selectCurrentChannel(state);
  if (!channel) return { loading: true };
  return {
    channel,
    messages: state.entities.messages,
    user: state.session.currentUser,
    otherUsernames: selectOtherUsernames(state, channel)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMessages: (type, id) => dispatch(fetchMessages(type, id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
