import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const SimpleLayout = () => {
  return (
    <div
      className="flex w-full min-h-[300px] bg-center px-4 py-5 rounded-lg flex-col gap-7"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${require("../../assets/images/scholar.png")})`,
      }}
    >
      <div>
        <p className="text-[#0259d6] font-bold uppercase">
          vsda
          <span className="bg-[#0259d6] text-white text-xs"> {"plus"}</span>
        </p>

        <h2 className="font-semibold">Open new doors with vsda course plus</h2>

        <p className="font-light">
          Get unlimited access to Hundreds of courses, hands on project and job
          ready certificate programs..
        </p>
      </div>

      <button className="flex justify-center items-center gap-2 hover:text-[#0259d6] hover:font-extrabold">
        Learn more
        <span>
          <ArrowRightIcon width={13} />
        </span>
      </button>
    </div>
  );
};

export default SimpleLayout;
