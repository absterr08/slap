import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute, DefaultRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import ChannelContainer from './channel/channel_container';
import avatarUpload from './user/avatarUpload';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';

const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <ProtectedRoute exact path="/upload" component={avatarUpload} />
      <ProtectedRoute exact path="/messages/:channelId" component={ HomeContainer } />
      <Switch>
        <AuthRoute path="/signup/:email" component={ SessionFormContainer } />
        <AuthRoute path="/login" component={ SessionFormContainer } />
        <AuthRoute path="/" component={ Splash } />
      </Switch>
    </Switch>
  </div>
);

export default App;
