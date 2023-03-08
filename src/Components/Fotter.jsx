import React from "react";
import Heading from "./Heading";
import Images from "./Images";
import List from "./List";
import ListItem from "./ListItem";

const Fotter = () => {
  return (
    <>
      <div className="bg-[#1B1C31]">
        <div className="container mx-auto   pt-28 ">
          <div className="flex justify-between">
            <div className="w-[40%]">
              <Images src={"./accets/BWFC (1).png"} />
              <Heading
                className="text-white mt-4 font-man text-base font-medium text-[#]"
                as="p"
                titel="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
              />
            </div>
            <div className="w-[45%] flex gap-x-24">
              <List>
                <ListItem className="text-white font-man text-xl font-bold mb-9">
                  Company
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Careers
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Blog
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Pricing
                </ListItem>
              </List>
              <List>
                <ListItem className="text-white font-man text-xl font-bold mb-9">
                  Product
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Careers
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Blog
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Pricing
                </ListItem>
              </List>
              <List>
                <ListItem className="text-white font-man text-xl font-bold mb-9">
                  Resources
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Careers
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Blog
                </ListItem>
                <ListItem className="text-white font-man text-base font-medium mb-4">
                  Pricing
                </ListItem>
              </List>
            </div>
          </div>
          <div className="flex justify-between  border-t border-[#404444] py-5 mt-32">
            <Heading
              className="font-man text-xs text-white"
              as="p"
              titel="2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services"
            />
            <Heading
              className="font-man text-xs text-white"
              as="p"
              titel="Supported by Microsoft Startup"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
