import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Popup from '../components/Popup';
import CarouselBanner from '../components/Banner';
import BannerBottom from '../components/BannerBottom';
import SocialIcons from '../components/SocialIcons';

import Latest from '../components/Latest';
import LatestSeries from '../components/LatestSeries';

class HomePage extends React.Component
{
  render()
  {
    return (
      <div>
        <Header />
        <Popup />
        <Navbar />

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