import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';

import { receiveNewChannelModal } from '../actions/modal_actions';

const Auth = ({ component: Component, path, loggedIn, channelId }) => {
  return (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/messages/${channelId}`} />
    )
  )} />
);}

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const protectedLink = ({ path, children, loggedIn, openSession }) => (
  loggedIn ? (
    <Link to={path}>{children}</Link>
  ) : (
    <button onClick={openSessionModal}>{children}</button>
  )
)

const mapStateToProps = ({ session: { currentUser }}) => {
  const defaultChannel = currentUser && currentUser.defaultChannel
  return {
    loggedIn: Boolean(currentUser),
    channelId: defaultChannel
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDmModal: () => dispatch(receiveNewChannelModal("dm"))
  }
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
