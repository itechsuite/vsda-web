import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  PhoneArrowUpRightIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import RightModal from "./Modal/RightModal";
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
      {/* top navigator  */}
      <div className="flex md:text-sm  px-2 py-2 flex-row md:gap-1 gap-2 items-center justify-between ">
        <div className="flex gap-3 items-center">
          <p className=" hidden md:flex text-sm  lg:flex">
            For Course Advice and bookings call :
          </p>
          <a
            href="tel:2348026393322 "
            className="md:text-sm  flex  gap-1 text-gray-600 text-sm font-bold hover:text-black"
          >
            <PhoneArrowUpRightIcon className="text-gray-600 w-5 hover:text-black" />
            +234(0)8026393322
          </a>
        </div>
        <Link
          to={"/contact"}
          className=" rounded-full py-2 px-5  border-2 border-red-600 text-xs bg-transparent text-black"
        >
          Register
        </Link>
      </div>

      {/* end of top navigator  */}

      {/* main navigator */}
      <div className="bg-[#e71211]  py-2 flex  px-2 justify-between ">
        <div className="flex items-center gap-4 ">
          <img
            src={require("../assets/images/logo/vsda-logo.png")}
            alt="logo"
            className="md:w-1/5 w-2/5"
          />
          {/* <Logo /> */}

          {/* <div>vsda</div> */}
          <div className="   gap-4 px-24 hidden md:flex text-white font-bold  lg:flex sm:hidden py-1">
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
        </div>

        <div className="flex items-center gap-2">
          <p className="uppercase text-lg md:hidden lg:hidden">Menu</p>
          <Bars3Icon
            onClick={() => setMobileMenu(true)}
            className="w-10 cursor-pointer md:hidden lg:hidden"
          />
        </div>
      </div>

      {/* end of main navigator  */}

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
