import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import RightModal from "./Modal/RightModal";
import Logo from "./Logo";
const Navbar = () => {
  const menus = [
    {
      name: "Home",
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
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [fixed, setFixed] = useState(false);
  const [mobile_menu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={
        fixed
          ? "sticky top-0 bg-white   z-50"
          : " bg-white  z-50  transition-all ease-in-out"
      }
    >
      <div className="bg-[#e71211]  py-2 flex justify-between   items-center text-white pr-3">
        <Logo />

        <div className="flex md:text-sm flex-row md:gap-1 gap-2 items-center ">
          <p className="hidden md:flex text-xs">
            For Course Advice and bookings call :
          </p>
          <a href="tel:2348026393322 " className="md:text-sm  text-xs">
            +234(0)8026393322
          </a>

          <Link
            to={"/contact"}
            className="btn  md:rounded-full md:px-10 md:text-sm bg-white text-black px-5 py-0 border-none  text-xs "
          >
            Register
          </Link>
        </div>
      </div>
      <div className="flex gap-4   pt-2 flex-row w-full   items-end justify-end pl-16  pr-5">
        <div className="  gap-4 px-24 hidden md:flex  lg:flex sm:hidden py-1">
          {menus &&
            menus.length > 1 &&
            menus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "after:h-1  after:bg-blue-400  after:absolute relative  after:w-full after:-bottom-1 after:left-0  after:content-['']"
                      : "font-light"
                  }
                >
                  <p>{menu.name}</p>
                </NavLink>
              );
            })}
        </div>

        <div className="flex items-center gap-2">
          <p className="uppercase text-lg">Menu</p>
          <Bars3Icon
            onClick={() => setMobileMenu(true)}
            className="w-10 cursor-pointer md:hidden lg:hidden"
          />
        </div>
      </div>

      {/* Mobile View  */}

      <RightModal onClose={() => setMobileMenu(false)} visible={mobile_menu}>
        <p
          className="text-right self-end lowercase   font-light  hover:font-bold cursor-pointer"
          onClick={() => setMobileMenu(false)}
        >
          <XMarkIcon className="w-6 text-gray-400 hover:text-red-600" />
        </p>

        <div className="py-4 px-3 gap-10 flex flex-col items-center">
          {menus &&
            menus.length > 1 &&
            menus.map((menu, index) => {
              return (
                <NavLink
                  onClick={() => setMobileMenu(false)}
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
      </RightModal>

      {/* End of Mobile View */}
    </div>
  );
};

export default Navbar;
