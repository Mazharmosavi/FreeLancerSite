import React, { useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const { ref } = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-full bg-secondary-800 bg-opacity-30 z-50 flex justify-center overflow-y-scroll  ">
        <div
          className=" h-fit  rounded-lg bg-secondary-0 p-2 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-58rem)] min-w-fit self-center "
          ref={ref}
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-4 ">
            <p className="text-secondary-700 font-bold text-base ">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
