import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Rootlayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default Rootlayout;
