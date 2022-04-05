import * as React from "react";
import Header from "../views/Header";
import Products from "../views/Products";
import Projects from "../views/Projects";
import Services from "../views/Services";
import PartnersAndClients from "../views/PartnersAndClients";
function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Services />
      <Products />
      <PartnersAndClients />
    </>
  );
}

export default Home;
