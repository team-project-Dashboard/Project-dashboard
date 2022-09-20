import React from "react";
import Sidebar from "./Sidebar";

const Layoutindex = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-dark">
          {children}
        </div>
      </div>
  );
};

export default Layoutindex;