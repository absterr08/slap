import React from 'react';
import {Route} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';


const App = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/hello" component={GreetingContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
