import * as React from "react";
import AppFooter from "../views/AppFooter";
import Header from "../views/Header";
import NavBar from "../views/NavBar";
import News from "../views/News";
import Products from "../views/Products";
import Projects from "../views/Projects";
import Services from "../views/Services";
import DirectorsMessage from "../views/DirectorsMessage";
import PartnersAndClients from "../views/PartnersAndClients";
import SlideCard from "../components/SlideCard";
import About from "../views/About";
import Contact from "../views/Contact";
function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About/>
      <Products />
      <Projects />
      <Services />
      <DirectorsMessage />
      <News />
      <PartnersAndClients />
      <Contact />
      <AppFooter />
    </>
  );
}

export default Home;
