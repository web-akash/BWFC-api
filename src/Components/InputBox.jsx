import React from "react";

const InputBox = ({ type, placeholder, className }) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default InputBox;
