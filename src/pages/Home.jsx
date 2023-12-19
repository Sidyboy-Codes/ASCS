import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "./../components/About/About";
import Article from "./../components/Articles/Article";
import Charity from "./../components/Charity/Charity";
import Footer from './../components/Footer/Footer';
import Hero from "./../components/Hero/Hero";
import Introduction from "./../components/Introduction/Introduction";
import Sponsor from "./../components/Sponsor/Sponsor";
import Team from "./../components/Team/Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Introduction />
      <About />
      <Charity />
      <Team />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
