import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicRoutes = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />

      <div className="min-h-[100vh] z-40 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default PublicRoutes;
