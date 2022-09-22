import React from "react";
import { BiCheck } from "react-icons/bi";

const Success = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-green-200 bg-green-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message} <BiCheck size={25} color="green" />
      </div>
    </div>
  );
};

export default Success;
