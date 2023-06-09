import React from "react";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const menus = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Skills  Market Place",
      link: "/skills",
    },
    {
      name: "Online Store",
      link: "/online",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <div>
      <div className="flex     px-4  flex-row py-8 text-black item-center  justify-between   ">
        <h2 className="text-3xl font-extrabold cursor-pointer ">VSDA</h2>
        <div className="flex gap-4  pt-10 font ">
          {menus &&
            menus.length > 1 &&
            menus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "after:h-1  after:bg-blue-400  after:absolute relative  after:w-full after:-bottom-4 after:left-0  after:content-['']"
                      : "font-light"
                  }
                >
                  <p>{menu.name}</p>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
