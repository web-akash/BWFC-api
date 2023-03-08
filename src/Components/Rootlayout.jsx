import React from "react";
import { Outlet } from "react-router-dom";
import Fotter from "./Fotter";
import Navbar from "./Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Rootlayout;
