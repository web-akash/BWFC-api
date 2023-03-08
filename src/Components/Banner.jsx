import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import Heading from "./Heading";
import HyperLink from "./HyperLink";
import MyButton from "./MyButton";

const Banner = () => {
  let [myData, setMyData] = useState({});
  let bannerData = async () => {
    try {
      let res = await Axios.get("/banner");
      setMyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bannerData();
  }, []);

  return (
    <div className="before:absolute bg-contain before:bg-[url('../public/accets/Union.png')] before:bg-no-repeat before:w-full before:h-[100%] before:-z-10  before:content-[''] after:absolute after:top-20 before:top-20   after:bg-[url('../public/accets/bgu.png')] after:bg-no-repeat after:w-full after:h-[100%] after:-z-10 after:content-['']  before:bg-center   after:bg-center ">
      <div className="container flex flex-wrap   justify-between mx-auto md:mt-[158px]  ">
        <div className=" w-[50%] ">
          <Heading
            as={"h1"}
            className="text-6xl font-extrabold font-man xl:mt-[100px] "
            titel={myData.bannerheading}
          />
          <Heading
            as="p"
            className="text-xl font-normal text-[#64607D] my-6 xl:max-w-[446px] "
            titel={myData.bannerparagraph}
          />
          <div className="flex  ">
            <HyperLink href={myData?.bannerButton?.link}>
              <MyButton
                className=" bg-primery text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[47px] text-sm px-8  text-center mr-3 md:mr-0 dark:bg-primery dark:hover:bg-blue-700 dark:focus:ring-blue-800 xl:mr-12 py-4 "
                value={myData?.bannerButton?.text}
              />
            </HyperLink>
            <HyperLink href={myData?.video?.link} className="flex items-center">
              <img src="./accets/play.png" alt="playbutton" />
              <Heading
                as={"p"}
                className="ml-2 text-[#3734A9]  font-semibold text-base font-man "
                titel={myData?.video?.text}
              />
            </HyperLink>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            className="xl:max-w-[115%] md:max-w-[100%]"
            src={myData?.bannerrightimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
