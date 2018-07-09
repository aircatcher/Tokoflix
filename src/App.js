import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import Libraries from './pages/Libraries';
import LibrariesUnauthorized from './pages/Libraries.unaothorized';

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
    {
      (localStorage.getItem('Authorization') !== null && localStorage.getItem('Auth Status') === 'true') ?
        <Route path="/library" exact component={Libraries} />
      :
        <Route path="/library" exact component={LibrariesUnauthorized} />
    }
    
  </div>;

export default App;
