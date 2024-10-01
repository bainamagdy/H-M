import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-2xl mx-auto  bg-[#faf9f8] flex flex-col">
            {children}
        </div>
    );
};

export default Container;
