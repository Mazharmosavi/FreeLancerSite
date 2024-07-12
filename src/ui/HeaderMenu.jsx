import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkMoodToggle from "./DarkMoodToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-baseline gap-2  h-8">
      <li >
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li >
        <DarkMoodToggle />
      </li>
      <li >
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
