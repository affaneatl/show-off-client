import * as React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import OurClients from '../views/OurClients';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCTA from '../views/ProductCTA';
import AppAppBar from '../views/AppAppBar';
import Header from '../components/Carousel'
import AboutSection from '../views/AboutSection';
import ProductSection from '../views/ProductSection';
import NavBar from '../views/NavBar';
import HeroSection from '../views/HeroSection';
import Products from '../views/Products';

function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <HeroSection/>
    <Products />
      {/* <AppAppBar />
      <AboutSection/>
      <ProductSection/>
      <OurClients />
      <ProductCategories />
      <ProductHowItWorks />
      <AppFooter /> */}
    </>
  );
}

export default Home;
