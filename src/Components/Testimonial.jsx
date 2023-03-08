import React from "react";
import Heading from "./Heading";
import Images from "./Images";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="container mx-auto  mb-24  ">
      <div className="w-[324px]">
        <Heading
          as="p"
          className="font-man text-sm text-primery font-bold text-primery mb-3 "
          titel="Testimonials"
        />
        <Heading
          as="h1"
          className="text-4xl font-man font-extrabold"
          titel="Check what our clients are sayin"
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <Images src="./accets/Group 1000000796.png" />
        </div>
        <div className="w-[38%]">
          <Heading
            as="h2"
            className="font-man text-xl font-extrabold w-[290px]"
            titel="Save Time Managing Social
          Media For Your Business"
          />
          <Heading
            as="p"
            className="font-man text-base text-[#757095] leading-6 mt-4"
            titel="Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          />
          <Heading
            as="p"
            className="font-man text-base text-[#757095] leading-6 mt-8"
            titel="Believing neglected so so allowance existence departure in. In design active temper be unea"
          />
          <div className="flex mt-3">
            <AiFillStar className="text-[#F9896B]" />
            <AiFillStar className="text-[#F9896B]" />
            <AiFillStar className="text-[#F9896B]" />
            <AiFillStar className="text-[#F9896B]" />
            <AiFillStar className="text-[#F9896B]" />
          </div>
          <Heading
            as="h2"
            className="text-base font-man font-extrabold"
            titel="Angela Taylor"
          />
          <Heading
            as="p"
            className="font-man text-xs text-[#757095]"
            titel="CEO SAMSUNG"
          />
        </div>
      </div>
      <div className="flex gap-2 ml-16 mt-4">
        <HiOutlineArrowNarrowLeft className="w-9 hover:bg-primery text-xs h-9 rounded-full text-black font-normal hover:text-white" />
        <HiOutlineArrowNarrowRight className="w-9 hover:bg-primery text-xs h-9 text:black rounded-full text-black hover:text-white" />
      </div>
    </div>
  );
};

export default Testimonial;
