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


function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <NewsSection/>
    </>
  );
}

export default Home;
