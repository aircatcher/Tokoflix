import React from 'react';

// import Navbar from '../components/page/Navbar';
// import Header from '../components/page/Header';
import Footer from '../components/page/Footer';

// import Popup from '../components/page/Popup';
// import CarouselBanner from '../components/page/Banner';
// import BannerBottom from '../components/page/BannerBottom';
import SocialIcons from '../components/page/SocialIcons';

import Latest from '../components/page/Latest';
// import LatestSeries from '../components/page/LatestSeries';

class HomePage extends React.Component
{
  render()
  {
    return (
      <div>
        {/* <Header /> */}
        {/* <Popup />
        <Navbar /> */}

        {/* <CarouselBanner /> */}
        {/* <BannerBottom /> */}
        <SocialIcons />

        <Latest />
        
        {/* <LatestSeries /> */}
        
        <Footer />
      </div>
    );
  }
}

export default HomePage;