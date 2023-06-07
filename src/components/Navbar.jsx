import React from "react";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
      name: "Online",
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
      <div className="flex space-x-4   z-50  px-4  flex-col py-8 text-black">
        <Bars3BottomLeftIcon className="h-6 w-6 md:hidden" />
        <h2 className="text-3xl font-extrabold cursor-pointer">VSDA</h2>

        <div className="flex gap-4 justify-center pt-10 font-bold items-center">
          {menus &&
            menus.length > 1 &&
            menus.map((menu, index) => {
              return (
                <Link to={menu.link} className="hover:font-bold font-light">
                  <p>{menu.name}</p>
                </Link>
              );
            })}
        </div>

        {/* <div className="flex flex-row gap-3">
          <Link to={"/courses"} className="hidden md:block text-sm">
            Courses
          </Link>
          <h3 className="hidden md:block text-sm"> News</h3>
          <h3 className="hidden md:block text-sm"> About</h3>
          <h3 className="hidden md:block text-sm"> Contact</h3>
          <h3 className="hidden md:block text-sm"> Tutorials</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
