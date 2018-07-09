import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';

/**
 * Get the URL for movie details
 * and set it to the route path for that page
 */
var details = localStorage.getItem('movieDetailsURL');
if(details === null) details = "/details";

/**
 * Check if user is logged in
 */
if( localStorage.getItem('Authorization') === null )
{
  if (localStorage.getItem('Authorization') !== null && localStorage.getItem('Auth Status') === 'true')
    localStorage.removeItem('userBalance');
}

const App = () =>
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path={details} exact component={MovieDetails} />
  </div>;

export default App;
