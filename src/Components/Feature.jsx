import React, { useState } from "react";
import Axios from "./Axios";
import Heading from "./Heading";
import Images from "./Images";
import MyButton from "./MyButton";
const Feature = () => {
  let [myData, setMyData] = useState({});
  let FeatureData = async () => {
    try {
      let res = await Axios.get("/feature");
      setMyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex justify-between">
          <div className="w-[50%]">
            <Images src="./accets/Illustration.png" />
          </div>
          <div className="w-[50%]">
            <Heading
              className="text-[#3734A9] font-man text-lg mb-6 font-extrabold"
              as="p"
              titel="Our Feature "
            />
            <Heading
              className="font-man text-5xl font-bold mb-6"
              as="h3"
              titel="Receive payments quickly from anywhere"
            />
            <Heading
              className="text-[#757095] font-man text-lg leading-8 mb-9"
              as="p"
              titel="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
            />
            <MyButton
              className={
                " bg-primery text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[47px] text-sm px-8  text-center mr-3 md:mr-0 dark:bg-primery dark:hover:bg-blue-700 dark:focus:ring-blue-800 xl:mr-12 py-4"
              }
              value="Get Started"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
