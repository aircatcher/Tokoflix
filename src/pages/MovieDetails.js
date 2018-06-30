import React from 'react';

import Footer from '../components/page/Footer';
import SocialIcons from '../components/page/SocialIcons';
import DetailsHandler from '../components/details/DetailsHandler';

class MovieDetails extends React.Component
{
  render()
  {
    return (
      <div>
        <SocialIcons />

        <DetailsHandler />
        
        <Footer />
      </div>
    );
  }
}

export default MovieDetails;