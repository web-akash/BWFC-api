import React from "react";

const MyButton = ({ className, type, children, onClick, value }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {value}
      {children}
    </button>
  );
};

export default MyButton;
