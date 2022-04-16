import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Spinner from './components/Spinner';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
const NavBar = React.lazy(() => import("./views/NavBar"));
const AppFooter = React.lazy(() => import("./views/AppFooter"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const DirectorsMessage = React.lazy(() => import("./views/DirectorsMessage"));
const AllProducts = React.lazy(() => import("./pages/AllProducts"));
const AllProjects = React.lazy(() => import("./pages/AllProjects"));
const LatestUpdate = React.lazy(() => import("./pages/LatestUpdate"));
const NewsDetails = React.lazy(() => import("./views/NewsDetails"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const ServiceDetails = React.lazy(() => import("./views/ServiceDetails"));
AOS.init();
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Suspense fallback={<Spinner/>}>
      <div className="App custombg1">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/directors-message" element={<DirectorsMessage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/latest-update" element={<LatestUpdate />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AppFooter />
      </div>
    </Suspense>
    </ThemeProvider>
  );
}

export default App;
