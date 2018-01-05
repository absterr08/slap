import React from 'react';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';


const App = () => (
  <div>
      <Route exact path="/"  component={NavBar}/>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/hello" component={HomeContainer} />
  </div>
);

export default App;
