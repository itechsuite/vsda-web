import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { TOGGLE_PERSONEL_VISIBILITY } from "../../services/artisanServices";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StaffInfoModel = ({ payload }) => {
  const [checked, setChecked] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  const changePersonelStatus = async ({ email, status }) => {
    // console.log({ email, status });
    setLoading(true);
    const res = await TOGGLE_PERSONEL_VISIBILITY({ email, state: status });
    console.log(res);

    if (!res.isOk) {
      setLoading(false);
      setSuccess(false);
      toast.error("Cannot validate request");
      return;
    }

    setLoading(false);
    setSuccess(true);
    toast.success("Personel Status updated");
  };
  return (
    <AccordionItem className="bg-[#f6f6f6] my-4 ">
      <AccordionItemHeading className=" px-3 py-4">
        <AccordionItemButton>
          <p className="font-bold text-xl">
            {payload.firstname} {payload.lastname}
          </p>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="px-3 py-4">
        <div className="flex gap-4">
          <p> Availability: </p>
          <p
            className={`font-bold ${
              payload.status === "1" ? "text-green-400" : "text-red-400"
            } `}
          >
            {payload.status === "1" ? "Available" : "Not Available"}
          </p>
        </div>

        <div className="flex  gap-4">
          <p>Email:</p>
          <p>{payload.email}</p>
        </div>
        <div className="flex  gap-4">
          <p>Address:</p>
          <p>{payload.address}</p>
        </div>
        <button
          className="btn"
          onClick={() => {
            payload.status === "1"
              ? changePersonelStatus({ email: payload.email, status: "0" })
              : changePersonelStatus({ email: payload.email, status: "1" });
          }}
        >
          {payload.status === "1" ? "Assign a Job" : "Make Staff Available"}
        </button>
      </AccordionItemPanel>

      <ToastContainer />
    </AccordionItem>
  );
};

//     <div
//     tabIndex={0}
//     className={`collapse  collapse-arrow border border-base-300 bg-base-200`}
//   >

//     <div className="collapse-title  px-4" onClick={() => setChecked(true)}>
//       <div className="flex  items-center justify-between">
//         <p>
//           {payload.firstname} {payload.lastname}
//         </p>
//       </div>
//     </div>
//     <div className="collapse-content">
//       <div className="flex items-center justify-between">
//         <p> Availability: </p>
//         <p
//           className={`font-bold ${
//             payload.status === "1" ? "text-red-400" : "text-green-400"
//           } `}
//         >
//           {payload.status === "1" ? "Not Available" : "Available"}
//         </p>
//       </div>
//       <p>Email: {payload.email}</p>
//       <p>Address: {payload.address}</p>

//       <button>Make Staff Available</button>
//     </div>
//   </div>

export default StaffInfoModel;
