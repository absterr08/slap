import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// only render the component if not logged in (ie signup form, splash page, navbar)
const Auth = ({ component: Component, path, loggedIn, channelId }) => {
  console.log(`auth route rendering: ${path}`);
  return (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/messages/${channelId}`} />
    )
  )} />
);}

// only render the component if logged in
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
  console.log('route_util mapping state')
  const defaultChannel = currentUser && currentUser.default_channel
  // make sure currentUser exists before checking for its channels
  const channelId = parseInt(localStorage.getItem("currentChannel")) || defaultChannel
  return {
    loggedIn: Boolean(currentUser),
    channelId
  }
}
;

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
