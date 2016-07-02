import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import TriviaTracksApp from './containers/TriviaTracksApp/TriviaTracksApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TriviaTracksApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
