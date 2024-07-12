import React from "react";
import { HiHome } from "react-icons/hi";
import { FaSignInAlt } from "react-icons/fa";
import AppLayout from "./AppLayout";
import CustomNavlink from "./CustomNavlink";
import SideBar from "./SideBar";

function AboutUs() {
  return (
    <AppLayout>
      <div className="bg-secondary-0 h-screen">
        <p className="font-bold p-5 text-secondary-700">
          فریلنسرایکس یک پروژه تمرینی برای یک سایت فریلنسری است که در آن
          کارفرمایان و فریلنسر ها میتوانند اقدام به ثبت پروژه های خود و درخاست
          برای آنها کنند.
        </p>
        <div className="flex w-screen space-x-50">
          <div className="h-80 max-w-sm bg-slate-400 border-4 rounded-lg mr-5">
            <span className="m-4 text-secondary-900 font-bold">فیچر ها</span>
            <div className="bg-secondary-0 max-w-sm h-[calc(100%-2.75rem)] p-2 text-secondary-700">
              <ui className="">
                <li>اعتبار سنجی کاربر با سامانه کاوه نگار</li>
                <li>تقسیم کاربران بر اساس نقش آنها </li>
                <li>تعین سطح دسترسی مخصوص هر نقش</li>
                <li>تعین رابط کاربری و لاجیک هر نقش</li>
                <li>امکان ساخت حساب، لاگ این و لاک اوت</li>
                <li>استایل دهی داینامیک و تم حالت شب</li>
                <li>وجود یک لی اوت کلی شامل هدر و ساید بار</li>
              </ui>
            </div>
          </div>
          <div className="h-80 max-w-sm bg-slate-400 border-4 rounded-lg mr-5">
            <span className="m-4 text-secondary-900 font-bold">
              {" "}
              کتاب خانه ها و سرویس ها
            </span>
            <div className="bg-secondary-0 max-w-sm h-[calc(100%-2.75rem)] p-2 text-secondary-700">
              <ui className="">
                <li>کتاب خانه‌ی ری اکت ایکون برای ایکون دهی</li>
                <li>کتاب خانه‌ی ری اکت کوئری برای دیتا فچینگ</li>
                <li> ری اکت هوک فرم برای مدیریت فرم ها</li>
                <li>سرویس مرتبط با ثبت پروژه و پیشنهاد</li>
                <li>سرویس های مرتبط با ویرایش پروژه ها </li>
                <li>سرویس های مرتبط با ویرایش پروپوزال ها</li>
              </ui>
            </div>
          </div>

          <div className="h-80 max-w-sm bg-slate-400 border-4 rounded-lg mr-5">
            <span className="m-4 text-secondary-900 font-bold">صفحات</span>
            <div className="bg-secondary-0 max-w-sm h-[calc(100%-2.75rem)] p-2 text-secondary-700">
              <ui className="">
                <li>یک صفحه اصلی برای پروژه</li>
                <li>صفحه در باره ما برای توضیح پروژه و معرفی آن</li>
                <li>یک لی اوت کلی برای کل صفحات پروژه</li>
                <li>یک صفحه برای اعتبار سنجی و ثبت نام</li>
                <li>یک صفحه برای هنگام وقوع ارور 404</li>
                <li>یک صفحه برای ادمین و فریلنسر و کارفرما</li>
                <li>یک صفحه برای مشاهده پروژه ها و پیشنهادات</li>
              </ui>
            </div>
          </div>
        </div>
      </div>

      <SideBar>
        <CustomNavlink to="/">
          <HiHome />
          <span> خانه</span>
        </CustomNavlink>
        <CustomNavlink to="/Auth">
          <FaSignInAlt />
          <span>ورود/ثبتنام</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default AboutUs;
