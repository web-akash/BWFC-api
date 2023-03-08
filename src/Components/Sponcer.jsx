import React from "react";
import Heading from "./Heading";
import Images from "./Images";

const Sponcer = () => {
  return (
    <>
      <div className="container mx-auto mt-16 mb-24">
        <Heading
          className={"text-2xl font-man text-center mb-9"}
          as={"h3"}
          titel={"Over 32k+ software  businesses growing with AR Shakir"}
        />

        <div className="flex justify-between">
          <Images src={"./accets/brand1.png"} />
          <Images src={"./accets/brand1.png"} />
          <Images src={"./accets/brand1.png"} />
          <Images src={"./accets/brand1.png"} />
          <Images src={"./accets/brand1.png"} />
        </div>
      </div>
    </>
  );
};

export default Sponcer;
