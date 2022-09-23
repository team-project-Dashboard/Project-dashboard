import React, { useState } from "react";
import { BiCaretLeft, BiCaretRight, BiUserPlus } from "react-icons/bi";
import Table from "../components/Table";
import NewForm from "../components/NewForm";
import Layout from "../components/Layout";

const users = () => {
  const [visible, setVisible] = useState(true);

  const handler = () => {
    setVisible(visible ? false : true);
  };

  return (
    <Layout>
      <div className="pb-2">
        <h4 className="text-xl md:text-5xl text-left font-bold">
          Immersive Dashboard
        </h4>
        <h2 className="text-md md:text-2xl text-left pb-3">User List</h2>
        <div className="container mx-autoflex justify-between py-5 border-b">
          <div className="left gap-3">
            <button
              onClick={handler}
              className="flex flex-row bg-blue-900 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500"
            >
              Add New{" "}
              <span className="px-1">
                <BiUserPlus size={23} />
              </span>
            </button>

            {/* Search option */}
            <form className="flex flex-row justify-end">
              <div className="input-type">
                <input
                  type="text"
                  name="search"
                  className="border w-full px-5 py-3 focus:outline-none rounded-md"
                  placeholder="Type here"
                />
              </div>
              <button className="flex justify-center text-md bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* form */}
        {visible ? <NewForm /> : <></>}

        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>

        <br />
        <div className="flex flex-row justify-end pt-5">
          <button className="flex border-gray-400 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500">
            <BiCaretLeft size={25} />
          </button>
          <button className="flex border-gray-400 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500">
            <BiCaretRight size={25} />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default users;
