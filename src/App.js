import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';

var details = localStorage.getItem('movieDetailsURL');

const App = () =>
  <div>
    <Route exact path="/" exact component={HomePage} />
    <Route exact path={details} exact component={MovieDetails} />
  </div>;

export default App;
