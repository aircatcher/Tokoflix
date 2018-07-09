import React from 'react';

// import Navbar from '../components/page/Navbar';
// import Header from '../components/page/Header';
import Footer from '../components/page/Footer';

// import CarouselBanner from '../components/page/Banner';
// import BannerBottom from '../components/page/BannerBottom';
import SocialIcons from '../components/page/SocialIcons';

import UserLibraryUnauthorized from '../components/page/library/UserLibrary.unauthorized';
// import LatestSeries from '../components/page/LatestSeries';

class LibrariesUnauthorized extends React.Component
{
  render()
  {
    return (
      <div>
        <SocialIcons />

        <UserLibraryUnauthorized />
        
        <Footer />
      </div>
    );
  }
}

export default LibrariesUnauthorized;