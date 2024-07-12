import React from "react";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";
import { HiHome,HiCollection } from "react-icons/hi";

function OwnerLAyout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLAyout;
