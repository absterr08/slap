import { changeChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCurrentChannelMessages } from '../../selectors/message_selectors';
import { selectCurrentChannel } from '../../selectors/channel_selectors';
import { selectChannelUsernames, selectDmUsernames } from '../../selectors/user_selectors';
import Channel from './channel';


const mapStateToProps = (state, ownProps) => {
    const channel = selectCurrentChannel(state);
    const user = state.session.currentUser.user;
    const users = channel.is_dm ? null : selectChannelUsernames(state)
    const title = channel.is_dm ? selectDmUsernames(state) : channel.name;
  return {
    channel,
    title,
    user,
    messages: selectCurrentChannelMessages(state),
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    changeChannel: id => dispatch(changeChannel(id))
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
