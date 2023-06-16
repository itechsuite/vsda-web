import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-[100vh] ">
      <div className="min-h-[20vh] bg-blue-400 flex items-center justify-center text-white font-bold text-2xl">
        <p>VSDA DASHBOARD</p>
      </div>

      <div className="-my-10 min-h-[200px] bg-gray-200 mx-10 rounded-sm flex gap-3 py-4 px-5">
        <p className="btn">add personel</p>
        <Link to={"/console/staffs"} className="btn">
          Staffs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
