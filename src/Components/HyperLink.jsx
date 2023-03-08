import React from "react";

const HyperLink = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default HyperLink;
