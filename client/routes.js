// web route for react part

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './common/containers/Root';
import Test from './test_to_be_deleted'; // TODO this should be deleted, since it's for test
import Test1 from './test_to_be_deleted/Test1'; // TODO this should be deleted, since it's for test

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Test} />
    <Route path='test' component={Test} />
    <Route path='test1' component={Test1} />
  </Route>
);
