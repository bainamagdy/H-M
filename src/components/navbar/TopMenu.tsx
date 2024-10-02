import React from "react";

const TopMenu = () => {
    return (
        <div className=" mx-auto w-fit   justify-center items-center sm:py-1 py-0 hidden lg:flex">
            <ul className="flex gap-2 text-sm font-normal ">
                <li>
                    <a href="#">تسجيل مستخدم جديد</a>
                </li>
                <li>
                    <a href="#">تسجيل الدخول</a>
                </li>
                <li>
                    <a href="#">البحث عن محلاتنا</a>
                </li>
                <li>
                    <a href="#">English</a>
                </li>
            </ul>
        </div>
    );
};

export default TopMenu;
