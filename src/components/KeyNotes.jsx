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
    <div className="px-3 py-5 bg-white flex  flex-col justify-center items-center">
      <div className="flex md:flex-initial md:flex-row gap-0   flex-col">
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
