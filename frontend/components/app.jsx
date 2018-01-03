import React from 'react';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';


const App = () => (
  <div>
      <Route path="/" component={NavBar} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/hello" component={GreetingContainer} />
  </div>
);

export default App;
