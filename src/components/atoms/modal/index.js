import React from "react";

import closeIcon from "../../../assets/close.svg";

export const Modal = ({ children }) => {
  const onClose = () => console.log("1");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white p-6 max-w-md mx-auto rounded shadow-md">
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={onClose}
        >
          <img src={closeIcon} alt="close button" className="w-14" />
        </span>
        {children}
      </div>
    </div>
  );
};
