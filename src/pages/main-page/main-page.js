import React from 'react';
import './main-page.scss';
import NavBar from "../../components/nav-bar/nav-bar";
import AboutSection from "../../components/about-section/about-section";
import WorkSection from "../../components/work-section/work-section";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero-section/hero";
import Archive from "../../components/archive/archive";

function Main() {
  return (
    <div className="container-main">
      <NavBar />
      <Hero />
      <AboutSection />
      <WorkSection />
      <Archive />
      <Footer />
    </div>
  );
}

export default Main;
