import React, { useState } from "react";

const RightModal = ({ visible, children, onClose, heading, bg }) => {
  if (!visible) return null;

  const handleClose = (e) => {
    if (e.target.id !== "master") return;

    onClose();
  };
  return (
    <div
      id="master"
      onClick={handleClose}
      className=" fixed inset-0 flex right-1 justify-end overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm flex-row z-50"
    >
      <div
        className="min-h-[300px] lg:w-1/3  transition-all w-3/4 rounded bg-white px-3 py-4"
        onDoubleClick={() => onClose}
        style={{ backgroundColor: bg }}
      >
        {heading && (
          <div onClick={handleClose}>
            <i id="master" onClick={handleClose}>
              {" "}
              close btn
            </i>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default RightModal;
