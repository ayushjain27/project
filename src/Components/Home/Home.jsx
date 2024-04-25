import React from "react";
import Carousel from "./Carousel";
import Quotes from "./Quotes";
import Donation from "./Donation";
import Shoutout from "./Shoutout";
import Footer from "./Footer";
import Testimaonials from "./Testimaonials";
import Navbar from "../Navbar/Navbar";
import Quote from '../Home/Quote';

const Home = () => {
  return (
    <div >
      <Navbar />
      <Quote />
     <div style={{width:'100%',backgroundColor:'black'}}> <Carousel /></div>
      <Quotes />
      <Donation />
      <Testimaonials />
      {/* <Shoutout /> */}
      <Footer />
    </div>
  );
};

export default Home;
