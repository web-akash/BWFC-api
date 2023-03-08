import React from "react";

const ListItem = ({ className, children, togolref, titel, key }) => {
  return (
    <li ref={togolref} className={className} key={key}>
      {titel}
      {children}
    </li>
  );
};

export default ListItem;
