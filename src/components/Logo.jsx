import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-3xl font-extrabold cursor-pointer  ">
      <img
        src={require("../assets/images/logo/vsda-logo.png")}
        alt="logo"
        className="md:w-2/5 w-2/5"
      />
    </Link>
  );
};

export default Logo;
