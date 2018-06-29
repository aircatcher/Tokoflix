import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

const App = () =>
  <div>
    <Route path="/" exact component={HomePage} />
    {/* <Route path="/details" exact component={} /> */}
  </div>;

export default App;
