import React from "react";
import Logo from "../Logo";
import { ScaleLoader, BarLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="flex min-h-[100vh] justify-center items-center flex-col gap-2">
      <Logo />
      <BarLoader />
    </div>
  );
};

export default PageLoader;
