import React from "react";


const Layoutindex = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      
      <div className="bg-[#349CE4] flex-1 p-4 text-black">
          {children}
        </div>
      </div>
  );
};

export default Layoutindex;