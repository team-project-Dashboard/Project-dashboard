import React from "react";
import { BiX } from "react-icons/bi";

const Bug = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-red-500 bg-red-600 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message} <BiX size={25} color="red" />
      </div>
    </div>
  );
};

export default Bug;
