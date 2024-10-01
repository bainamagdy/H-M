import React from "react";

const MainContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="  lg:min-h-[calc(100vh-140px)] min-h-[calc(100vh-89px)] mx-auto w-full flex-1">
            {children}
        </div>
    );
};

export default MainContentContainer;
