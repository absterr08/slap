import React from 'react';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import ChannelContainer from './channel/channel_container';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';



const App = () => (
  <div className="app">
    <AuthRoute path="/" component={NavBar}/>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup/:email" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/messages" component={HomeContainer} />
      <ProtectedRoute path="/messages/:channelId" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
