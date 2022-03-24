import * as React from "react";
import AppFooter from "../views/AppFooter";
import Header from "../views/Header";
import NavBar from "../views/NavBar";
import EatlEvent from "../views/EatlEvent";
import Products from "../views/Products";
import News from "../views/News";
import ProductCategories from "../views/bin/ProductCategories";
import NewsSection from "../views/NewsSection";
import Container from "@mui/material/Container";
import Services from "../views/Services";
import DirectorsMessage from "../views/DirectorsMessage";
import PartnersAndClients from "../views/PartnersAndClients";
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Products/>
      <NewsSection/>
      <Services/>
      <DirectorsMessage/>
      <PartnersAndClients/>
      <ProductCategories/>
      <AppFooter/>
    </>
  );
}

export default Home;
