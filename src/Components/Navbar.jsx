import React, { useEffect, useState } from "react";
import axios from "./Axios";
import HyperLink from "./HyperLink";
import Images from "./Images";
import MyButton from "./MyButton";
import List from "./List";
import ListItem from "./ListItem";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";
const Navbar = () => {
  let ref = useRef();
  let [myData, setMyData] = useState({});

  let NavData = async () => {
    try {
      const res = await axios.get("/navbar");
      setMyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    NavData();
  }, []);

  let [show, setShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="bg-[#ffff] px-2 sm:px-4 py-2.5 dark:bg-gray-900 absolute w-full z-20 top-0 left-0  font-man">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <HyperLink href="#" className="flex items-center">
            <Images src={myData?.logo}></Images>
          </HyperLink>

          <div>
            <List className="flex items-center gap-x-7 relative">
              {myData?.navItems?.map((item, index) => (
                <>
                  <ListItem
                    togolref={ref}
                    className="flex justify-between items-center gap-x-2 "
                    titel={item.item}
                    key={index}
                  >
                    <IoIosArrowDown />

                    {item.dropDown == true
                      ? show && (
                          <List className="absolute -bottom-20 -left-12 bg-white border border-black px-12 py-2">
                            {item.dropDownItem.map((dropItem, dropIndex) => (
                              <ListItem
                                className="mb-2"
                                key={dropIndex}
                                titel={dropItem.dropItem}
                              />
                            ))}
                          </List>
                        )
                      : null}
                  </ListItem>
                </>
              ))}
            </List>
          </div>

          <div className="flex gap-x-7">
            {myData?.buttonOne?.visibility ? (
              <>
                <MyButton className="font-normal text-sm px-9 py-4">
                  {myData?.buttonOne?.text}
                </MyButton>
              </>
            ) : null}
            {myData?.buttonTwo?.visibility ? (
              <>
                <MyButton className="px-9 py-4 bg-primery text-white rounded-lg font-normal text-sm">
                  {myData?.buttonTwo?.text}
                </MyButton>
              </>
            ) : null}
            {myData?.buttonThree?.visibility ? (
              <>
                <MyButton className="px-9 py-4 bg-primery text-white rounded-lg font-normal text-sm">
                  {myData?.buttonThree?.text}
                </MyButton>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
