import React from "react";
import { SearchIcon } from "lucide-react";

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

export default Search;
