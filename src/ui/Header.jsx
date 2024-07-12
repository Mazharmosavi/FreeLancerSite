import React from "react";
import useUser from "../hooks/useUser";
import UserAvatar from "../features/authentication/UserAvatar";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-baseline justify-end gap-x-8 ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
