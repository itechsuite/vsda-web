import React from "react";
import { Link } from "react-router-dom";

const RegisterNow = ({ onClick }) => {
  return (
    <div className="flex flex-row justify-between bg-[#dc4124] text-white p-10 min-h-[30vh] my-6 items-center">
      <div>
        <div className="flex flex-col  gap-3 w-3/4">
          <p className="font-bold text-lg">Start Your Technical Journey here</p>
          <p className=" uppercase  text-sm ">
            Register and become one of our trained and certified technician
          </p>
        </div>
      </div>

      <button onClick={onClick} className="btn  rounded-none">
        Register now{" "}
      </button>
    </div>
  );
};

export default RegisterNow;
