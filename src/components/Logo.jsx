import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="px-3">
      <Link to={"/"} className="text-3xl font-extrabold cursor-pointer ">
        <img
          src={require("../assets/images/logo/vsda-logo.png")}
          alt="logo"
          className="md:w-2/5 w-1/5"
        />
      </Link>
    </div>
  );
};

export default Logo;
