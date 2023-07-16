
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../Container';
import Packages from '../pages/Packages';
import Support from '../pages/Support';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Container} />
      <Route path="/packages" component={Packages} />
      <Route path="/support" component={Support} />
    </Switch>
  );
};

export default Routes;
