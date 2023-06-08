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
        className="min-h-[300px] w-3/5 rounded bg-white px-10 py-10  "
        onDoubleClick={() => onClose}
      >
        {heading && (
          <div onClick={handleClose}>
            <i id="master" onClick={handleClose}>
              close btn
            </i>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal1;
