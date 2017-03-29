import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

import Home from './views/Home';
import NotFound from './views/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);
