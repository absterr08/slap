import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, defaultChannel }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/messages/${defaultChannel}`} />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = ({session: {currentUser}}) => {
  // make sure currentUser exists before checking for its channels
  //debugger
  return {
    loggedIn: Boolean(currentUser),
    defaultChannel: currentUser && 199 //currentUser.defaultChannel.id
  }
}
;

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
