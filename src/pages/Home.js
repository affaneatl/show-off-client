import * as React from "react";
import AppFooter from "../views/AppFooter";
import Header from "../components/Carousel";
import NavBar from "../views/NavBar";
import HeroSection from "../views/HeroSection";
import Products from "../views/Products";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <HeroSection />
      <Products />
      <AppFooter />
    </>
  );
}

export default Home;
