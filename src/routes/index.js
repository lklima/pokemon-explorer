import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);

export default Routes;
