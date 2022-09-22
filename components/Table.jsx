import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="py-2">
            <span className="text-gray-200">No.</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Full Name</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Email</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Team</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Role</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Status</span>
          </th>

          <th className="px-10 py-2">
            <span className="text-gray-200">Desc</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">1</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Mentor 1</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">
              mentor1@alterra.id
            </span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Academic</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Default</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-10 py-2 flex justify-around items-center">
            <button className="cursor">
              {" "}
              <BiEdit size={23} />
            </button>
            <button className="cursor">
              {" "}
              <BiTrashAlt size={23} color={"red"} />
            </button>
          </td>
        </tr>

        <tr className="bg-gray-50 text-center">
          <td className="py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">2</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Admin</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">
              admin@alterra.id
            </span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Placement</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">Admin</span>
          </td>
          <td className="px-10py-2 flex-row items-center">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-10 py-2 flex justify-around items-center">
            <button className="cursor">
              {" "}
              <BiEdit size={23} />
            </button>
            <button className="cursor">
              {" "}
              <BiTrashAlt size={23} color={"red"} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
