import React from "react";
import KeyNotesModel from "./view-models/KeyNotesModel";

import { CreditCardIcon } from "@heroicons/react/24/outline";
const KeyNotes = () => {
  return (
    <div className="px-3 py-5 bg-white flex flex-col justify-center items-center">
      <div className="flex flex-initial gap-0">
        <KeyNotesModel
          image={
            <CreditCardIcon
              className="w-10 text-gray-300"
              title="credit card"
            />
          }
        />
        <KeyNotesModel
          title="Flexible training"
          image={
            <CreditCardIcon className="w-10 text-gray-300 hover:text-white" />
          }
        />
        <KeyNotesModel
          image={
            <CreditCardIcon
              className="w-10 text-gray-300"
              title="Flexible training"
            />
          }
        />
        <KeyNotesModel
          title="Flexible training"
          image={<CreditCardIcon className="w-10 text-gray-300" />}
        />
      </div>
    </div>
  );
};

export default KeyNotes;
