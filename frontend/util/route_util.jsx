import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

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

const mapStateToProps = ({ session: { currentUser }}) => {
  const defaultChannel = currentUser && currentUser.default_channel
  // make sure currentUser exists before checking for its channels
  debugger
  const channelId = parseInt(localStorage.getItem("currentChannel")) || defaultChannel
  return {
    loggedIn: Boolean(currentUser),
    channelId
  }
}
;

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
