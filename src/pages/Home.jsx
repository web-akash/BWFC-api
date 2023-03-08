import React from "react";
import Banner from "../Components/Banner";
import Choseus from "../Components/Choseus";
import Feature from "../Components/Feature";
import Payment from "../Components/Payment";
import Sponcer from "../Components/Sponcer";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Sponcer />
      <Feature />
      <Payment />
      <Testimonial />
      <Choseus />
    </>
  );
};

export default Home;
