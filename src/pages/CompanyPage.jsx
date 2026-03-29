import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CompanyHero from '../components/company/CompanyHero';
import CompanyIntro from '../components/company/CompanyIntro';
import CompanyPrinciples from '../components/company/CompanyPrinciples';
import CompanyTeam from '../components/company/CompanyTeam';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';

const CompanyPage = () => {
  // Ensure the page scrolls to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <CompanyHero />
      <CompanyIntro />
      <CompanyPrinciples />
      <CompanyTeam />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default CompanyPage;
