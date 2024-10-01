import { Heart, Menu, SearchIcon, ShoppingBag } from "lucide-react";
import React from "react";

export const Navbar = () => {
    return (
        <div className="lg:h-[140px] sm:py-2 pt-1 flex flex-col">
            <TopMenu />
            <Header />
            <BottomMenu />
        </div>
    );
};

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

const Header = () => {
    return (
        <div className="flex flex-wrap justify-between items-center sm:p-2 ">
            <Search />
            <Logo />
            <Actions />
        </div>
    );
};

const Actions = () => {
    return (
        <div className="flex min-w-fit gap-7 font-light items-center justify-end  w-1/4 sm:order-3 order-2 lg:order-none">
            <Heart size={35} strokeWidth={1} />
            <ShoppingBag size={35} strokeWidth={1} className="light" />
        </div>
    );
};

const Logo = () => {
    return (
        <div className="lg:w-1/2 w-1/4 flex justify-start lg:justify-center order-1  lg:order-none">
            <div className="lg:hidden">
                <Menu size={32} strokeWidth={1} className="mx-2" />
            </div>
            <div>
                <img
                    src="./site-logo.svg"
                    alt=""
                    className="lg:w-[70px] lg:h-[44px] w-[45px] h-[30px] mx-auto min-w-fit"
                />
            </div>
        </div>
    );
};

const Search = () => {
    return (
        <div className="sm:flex  lg:w-1/4 sm:w-1/2 items-center justify-center lg:justify-start sm:order-2 order-3 lg:order-none  w-full  mt-2 border-t sm:mt-0 sm:border-t-0 border-[#c8c8c8] ">
            <div className="flex border-b sm:pb-2 py-2 border-[#c8c8c8] sm:border-black px-2">
                <input
                    type="text"
                    placeholder="عن ماذا تبحث؟"
                    className="outline-none border-none  flex-1 bg-transparent placeholder:text-black text-base sm:order-none order-2 sm:pr-0 pr-2"
                />
                <SearchIcon className="text-slate-500" strokeWidth={1} />
            </div>
        </div>
    );
};

const BottomMenu = () => {
    return (
        <div className=" gap-2 items-center justify-center my-auto  hidden lg:flex">
            <ul className="flex gap-4 text-base  ">
                <li
                    className="hover:border-black border-transparent border-b-2 pb-1
                "
                >
                    <a href="#">النساء</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الرجال</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الرضع</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الاطفال</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">اتش اند ام هوم</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">الملابس الرياضية</a>
                </li>
                <li className="hover:border-black border-transparent border-b-2">
                    <a href="#">التنزيلات</a>
                </li>
            </ul>
        </div>
    );
};
