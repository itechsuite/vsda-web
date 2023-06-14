import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="text-3xl font-extrabold cursor-pointer ">
        VSDA
      </Link>
    </div>
  );
};

export default Logo;
