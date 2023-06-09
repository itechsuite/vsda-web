import React from "react";
import { NavLink } from "react-router-dom";

const ArtisanCard = ({ payload, onClick }) => {
  return (
    <div>
      {" "}
      <div className=" max-w-[350px] py-2 px-0 rounded-xl  backdrop-blur-xl  bg-black bg-opacity-10 border-2">
        <p className="w-full bg-blue-400 h-3">&nbsp;</p>
        <div className=" flex flex-col gap-4 px-4 items-center py-4">
          <div className="relative ">
            <img
              className="w-[50px] rounded-full h-[50px]"
              src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              alt=""
            />
            <div className=" bottom-0 right-0 absolute h-[15px] w-[15px] bg-red-700 rounded-full border border-gray-300 border-2">
              &nbsp;
            </div>
          </div>
          <div
            className="flex flex-row gap-4
  "
          >
            <div className="text-white text-sm flex flex-col gap-3">
              <span className="font-extrabold px-2">
                {payload.firstname} {payload.lastname}
                <p className="text-center  font-normal text-xs">
                  Not available
                </p>
              </span>

              <p>Brief details of the user</p>

              <div>
                <p className="font-bold">Previous Jobs done </p>
              </div>

              <button
                onClick={onClick}
                className=" rounded-full bg-blue-500 font-bold  text-sm px-3 py-1
              "
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;