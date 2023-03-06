import React from "react";

const Banner = () => {
  return (
    <div className="before:absolute before:bg-[url('../public/accets/Union.png')] before:bg-no-repeat before:w-full before:h-[100%] before:-z-10  before:content-[''] after:absolute after:top-20   after:bg-[url('../public/accets/bgu.png')] after:bg-no-repeat after:w-full after:h-[100%] after:-z-10 after:content-['']">
      <div className="container flex flex-wrap   justify-between mx-auto md:mt-[158px]  ">
        <div className=" w-[50%] ">
          <h1 className="text-6xl font-extrabold font-man xl:mt-[100px] ">
            Managing business payments has never been easier
          </h1>
          <p className="text-xl font-normal text-[#64607D] my-6 xl:max-w-[446px] ">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <div className="flex  ">
            <button className=" bg-primery text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[47px] text-sm px-8  text-center mr-3 md:mr-0 dark:bg-primery dark:hover:bg-blue-700 dark:focus:ring-blue-800 xl:mr-12 py-4 ">
              Get Started
            </button>

            <img src="./accets/play.png" alt="playbutton" />
            <button className="ml-2 text-[#3734A9] font-semibold text-base font-man">
              See How It Works
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            className="xl:max-w-[115%] md:max-w-[100%]"
            src="./accets/banner.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
