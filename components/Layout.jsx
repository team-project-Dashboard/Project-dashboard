import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">

      <Sidebar />
      <div className="bg-[#6CB4E4] flex-1 p-4 text-dark ">
        
        <div className="bg-dark">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
