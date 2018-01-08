import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import Channel from './channel';

const mapStateToProps = (state) => {
  // debugger
  return {
    messages: values(state.ui.currentChannel.messages),
    user: state.session.currentUser,
    getMessageAuthor: authorId => (state.entities.users[authorId])
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchUsersThenMessages: () => dispatch(fetchUsersThenMessages()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchChannel: id => dispatch(fetchChannel(id))
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
