import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoggedIn from "@solid/react/module/components/LoggedIn";

import {
  Login,
  Welcome,
  Map,
  Upload,
  Download,
  PageNotFound

} from './containers';
import NavBar from './components/NavBar';

const Routes = () => (
  <HashRouter>
    <div>
      <LoggedIn>
        <NavBar />
      </LoggedIn>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/download" component={Download} />
        <Route exact path="/" component={Login} />
        <Route exact path="/*" component={PageNotFound} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
