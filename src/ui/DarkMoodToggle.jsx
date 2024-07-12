import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkMoodToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 text-primary-900" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 text-primary-900" />
        )}
      </button>
    </div>
  );
}

export default DarkMoodToggle;
