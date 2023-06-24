import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Modal1 = ({ visible, children, onClose, heading }) => {
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
        " fixed inset-0 flex  items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm flex-col z-50"
      }
    >
      <div
        className="min-h-[250px] md:w-2/4 rounded bg-white px-10 py-10   w-3/4 "
        onDoubleClick={() => onClose}
      >
        <div
          onClick={handleClose}
          className=" w-full  text-right px-3 flex flex-row justify-end"
        >
          <XMarkIcon
            id="master"
            className="w-6 text-gray-400 hover:text-red-600"
            onClick={handleClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal1;
