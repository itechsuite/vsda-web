import React from "react";
import KeyNotesModel from "./view-models/KeyNotesModel";

import {
  BookOpenIcon,
  BuildingStorefrontIcon,
  CreditCardIcon,
  GlobeEuropeAfricaIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
const KeyNotes = () => {
  return (
    <div
      className="px-3 py-5 bg-white flex  flex-col justify-center items-center gap-3 min-h-[50vh]"
      style={{
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(to bottom, rgba(60,63,65, 0.92), rgba(0,0,0, 0.93)),
    url('images/background.jpg') ,url(${require("../assets/images/lady.jpg")})`,
      }}
    >
      <div className=" text-white flex flex-col gap-4 items-center md:w-2/4 ">
        <p className="font-bold text-3xl">Technical Resources </p>
        <p className=" text-white">
          Plug into our world endless technical possibilities, from
          best-in-class equipment, well trained/certified personnel and bespoke
          courses to sharpen your existing skills
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2">
        <KeyNotesModel
          title="Skills Market Place"
          destination={"/skills"}
          image={
            <WrenchScrewdriverIcon className="w-10 text-gray-300 hover:scale-50 hover:text-white" />
          }
        />
        <KeyNotesModel
          title="Online Store"
          destination={"/online"}
          image={
            <BuildingStorefrontIcon className="w-10 text-gray-300 hover:scale-50 hover:text-white" />
          }
        />
        <KeyNotesModel
          title="Capacity Development"
          destination={"/courses"}
          image={
            <BookOpenIcon className="w-10 text-gray-300 hover:scale-50 hover:text-white" />
          }
        />
        <KeyNotesModel
          title="Services"
          target={"_blank"}
          destination={"https://serviceexpert.com.ng/services.html"}
          image={
            <GlobeEuropeAfricaIcon className="w-10 text-gray-300 hover:scale-50 hover:text-white" />
          }
        />
      </div>
    </div>
  );
};

export default KeyNotes;
