import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsDesigned from '../components/solutions/SolutionsDesigned';
import SolutionsAssetManagement from '../components/solutions/SolutionsAssetManagement';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';

const SolutionsPage = () => {
  // Ensure the page scrolls to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <SolutionsHero />
      <SolutionsDesigned />
      <SolutionsAssetManagement />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default SolutionsPage;
