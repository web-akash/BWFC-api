import React from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import MyButton from "./MyButton";

const Choseus = () => {
  return (
    <div className="container mx-auto  mb-24 bg-primery py-16 px-14">
      <div className="flex justify-between gap-x-10">
        <div className="w-[52%]">
          <Heading
            className="text-white font-man text-lg mb-6 font-extrabold"
            as="p"
            titel="Why Choose Us "
          />
          <Heading
            className="font-man text-5xl font-bold mb-6 text-white"
            as="h3"
            titel="Track your crytpo portfolio on the best way possible"
          />
          <Heading
            className="text-white font-man text-lg leading-8 mb-9"
            as="p"
            titel="End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
          />
        </div>
        <div className="w-[38%]">
          <Heading
            className="text-[#3734A9] font-man text-lg mb-6 font-extrabold"
            as="p"
            titel="Get Started for Free "
          />
          <InputBox
            className="block w-[356px] bg-[#BBB5E0] border-none text-[#64607D] mb-6 p-4 rounded-md"
            type="email"
            placeholder="Email Address"
          />
          <InputBox
            className="block w-[356px] bg-[#BBB5E0] border-none text-[#64607D] p-4 rounded-md"
            type="password"
            placeholder="Password"
          />
          <MyButton
            className={
              " bg-[#FF7F5C] w-[356px] text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm px-8  text-center mr-3 md:mr-0 dark:bg-primery dark:hover:bg-blue-700 dark:focus:ring-blue-800 xl:mr-12 py-4 mt-6"
            }
            value="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export default Choseus;
