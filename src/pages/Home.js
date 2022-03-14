import * as React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import OurClients from '../views/OurClients';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCTA from '../views/ProductCTA';
import AppAppBar from '../views/AppAppBar';
import Example from '../components/Carousel'
import AboutSection from '../views/AboutSection';
import ProductSection from '../views/ProductSection';

function Home() {
  return (
    <>
      <AppAppBar />
      <Example/>
      <AboutSection/>
      <ProductSection/>
      <OurClients />
      <ProductCategories />
      <ProductHowItWorks />
      <AppFooter />
    </>
  );
}

export default Home;
