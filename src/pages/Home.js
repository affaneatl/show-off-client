import * as React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import OurTeam from '../views/OurTeam';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCTA from '../views/ProductCTA';
import AppAppBar from '../views/AppAppBar';
import Example from '../components/Carousel'
function Home() {
  return (
    <>
      <AppAppBar />
      <Example/>
      <OurTeam />
      <ProductCategories />
      <ProductHowItWorks />
      <AppFooter />
    </>
  );
}

export default Home;
