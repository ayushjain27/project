import React from "react";
import Carousel from "./Carousel";
import Quotes from "./Quotes";
import Donation from "./Donation";
import Shoutout from "./Shoutout";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Carousel />
      <Quotes />
      <Donation />
      <Shoutout />
      <Footer />
    </>
  );
};

export default Home;
