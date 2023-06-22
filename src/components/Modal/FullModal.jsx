import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const FullModal = ({ visible, children, onClose, heading }) => {
  if (!visible) return null;

  const handleClose = (e) => {
    if (e.target.id !== "master") return;

    // alert("clicked")
    onClose();
  };
  return (
    <div
      id="master"
      onClick={handleClose}
      className={
        " fixed inset-0 flex    items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm flex-col z-50"
      }
    >
      <div
        className="max-h-[70vh]  w-3/4 rounded bg-white   overflow-scroll  px-3 "
        onDoubleClick={() => onClose}
      >
        <div
          onClick={handleClose}
          className=" w-full  text-right  flex flex-row justify-end "
        ></div>
        {children}

        {/* <div>heehe</div> */}
      </div>
    </div>
  );
};

export default FullModal;
