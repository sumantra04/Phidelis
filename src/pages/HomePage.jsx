import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import HowWeCreateValue from '../components/HowWeCreateValue';
import PersonalisedSolutions from '../components/PersonalisedSolutions';
import SeasonedExperts from '../components/SeasonedExperts';
import TechnologyPowers from '../components/TechnologyPowers';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HowWeCreateValue />
      <div id="solutions">
        <PersonalisedSolutions />
      </div>
      <SeasonedExperts />
      <div id="technology">
        <TechnologyPowers />
      </div>
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default HomePage;
