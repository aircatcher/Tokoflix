import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';

const App = () =>
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/details" exact component={MovieDetails} />
  </div>;

export default App;
