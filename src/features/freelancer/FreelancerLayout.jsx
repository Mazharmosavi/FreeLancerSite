import React from "react";
import { HiCollection, HiHome, HiSortAscending } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiSortAscending />
          <span>درخواست ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLayout;
