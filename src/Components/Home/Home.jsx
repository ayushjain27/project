import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import Quotes from "./Quotes";
import Donation from "./Donation";
import Shoutout from "./Shoutout";
import Footer from "./Footer";
import Testimaonials from "./Testimaonials";

const Home = () => {
  return (
    <div >
      <Navbar />
     <div style={{width:'100%',backgroundColor:'black'}}> <Carousel /></div>
      <Quotes />
      <Donation />
      <Testimaonials />
      <Shoutout />
      <Footer />
    </div>
  );
};

export default Home;
