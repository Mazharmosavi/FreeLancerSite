import React from "react";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import CustomNavlink from "../ui/CustomNavlink";
import SideBar from "../ui/SideBar";

function HomePage() {
  return (
    <AppLayout>
      <div className="flex justify-center h-screen bg-secondary-0 pt-5">
        <div className="xl:max-w-screen-xl justify-center text-center ">
          <h1 className="text-secondary-700 font-bold text-xl  mb-8">
            به فریلنسرایکس خوش آمدید
          </h1>
          <h3 className="font-bold text-secondary-700 mb-8">
            برای کار با فرلنسرایکس لطفا ثبت نام کنید یا وارد حساب خود شوید.{" "}
          </h3>
          <Link className="btn btn--primary " to={"/auth"}>
            ورود و ثبت نام
          </Link>
        </div>
      </div>
      <SideBar>
      <CustomNavlink to="About-Us">
      <FaPersonCircleQuestion />
          <span>درباره ما</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default HomePage;
