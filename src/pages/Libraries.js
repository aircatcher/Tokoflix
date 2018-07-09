import React from 'react';

// import Navbar from '../components/page/Navbar';
// import Header from '../components/page/Header';
import Footer from '../components/page/Footer';

// import CarouselBanner from '../components/page/Banner';
// import BannerBottom from '../components/page/BannerBottom';
import SocialIcons from '../components/page/SocialIcons';

import UserLibrary from '../components/page/library/UserLibrary';
// import LatestSeries from '../components/page/LatestSeries';

class Libraries extends React.Component
{
  render()
  {
    return (
      <div>
        <SocialIcons />

        <UserLibrary />
        
        <Footer />
      </div>
    );
  }
}

export default Libraries;