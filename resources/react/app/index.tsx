import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from 'components/public/welcome';
import Demo from 'components/public/demo';
import * as ROUTES from 'constants/routes';
import NotFound from './404';

export default () => (
  <Switch>
    <Route path={ROUTES.DEMO} component={Demo} />
    <Route exact path={ROUTES.WELCOME} component={Welcome} />
    <NotFound />
  </Switch>
);
