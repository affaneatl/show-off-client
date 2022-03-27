import * as React from "react";
import AppFooter from "../views/AppFooter";
import Header from "../views/Header";
import NavBar from "../views/NavBar";
import News from "../views/News";
import Products from "../views/Products";
import Services from "../views/Services";
import DirectorsMessage from "../views/DirectorsMessage";
import PartnersAndClients from "../views/PartnersAndClients";
import SlideCard from "../components/SlideCard";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Products />
      <News />
      <Services />
      <DirectorsMessage />
      <PartnersAndClients />
      <AppFooter />
    </>
  );
}

export default Home;
