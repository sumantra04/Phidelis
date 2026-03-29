import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TechnologyHero from '../components/technology/TechnologyHero';
import TechnologyTransparent from '../components/technology/TechnologyTransparent';
import TechnologyFeatures from '../components/technology/TechnologyFeatures';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';

const TechnologyPage = () => {
  // Ensure the page scrolls to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <TechnologyHero />
      <TechnologyTransparent />
      <TechnologyFeatures />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default TechnologyPage;
