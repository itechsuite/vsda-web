import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* <Navbar /> */}

      <div className="min-h-[100vh] z-40 ">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default PrivateRoutes;
