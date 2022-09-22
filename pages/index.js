import Layoutindex from "../components/Layoutindex";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaEnvelope,
} from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

export default function Home() {
  return (
    <Layoutindex>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-gray-500">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className=" w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-[#2563eb]">Dashboard</span>App
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-[#1d4ed8]">
                  Sign in to Access
                </h2>
                <div className="border-2 w-10 bg-[#6b21a8] inline-block"></div>
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-[#4b5563] rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[#4b5563] rounded-full p-3 mx-1"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[#4b5563] rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="text-[#737373] my-3">use ID account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-[#6b7280] w-64 p-2 flex items-center mb-3 rounded-xl">
                    <FaEnvelope className="text-[#fafafa] m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="bg-[#6b7280] outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-[#6b7280] w-64 p-2 flex items-center mb-3 rounded-xl">
                    <HiLockClosed className="text-[#fafafa] m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-[#6b7280] outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      remember me?
                    </label>
                  </div>
                  <a
                    href="/dashboard"
                    className="border-2 bg-[#fafafa] rounded-full px-12 py-2 inline-block font-ssemibold hover:bg-[#0ea5e9] hover:text-[#fafafa]"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="w-2/5 bg-[#1d4ed8] rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2 text-[#fafafa]">
                Welcome..!!
              </h2>
              <div className="border-2 border-[#fafafa] w-10 bg-[#fafafa] inline-block"></div>
              <p className="text-[#fafafa] mb-2">student data management app</p>
            </div>
          </div>
        </div>
      </div>
    </Layoutindex>
  );
}
=======

import Layoutindex from "../components/Layoutindex";
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope,} from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import Button from 'react-bootstrap/Button';


export default function Home() {

  return (
    <div className="bg-[#354551]">
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-gray-500">
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
    <div className=" w-3/5 p-5">
      <div className="text-left font-bold">
        <span className="text-[#1C4C74]">Dashboard</span>App
      </div>
      <div className="py-10">
        <h2 className="text-3xl font-bold text-[#1C4C74]">Sign in to Access
        </h2>
        <div className="border-2 w-10 bg-[#6b21a8] inline-block"></div>
        <div className="flex justify-center my-2">
          <a href="#" className="border-2 border-[#4b5563] rounded-full p-3 mx-1">
            <FaFacebookF className="text-sm" />
          </a>
          <a href="#" className="border-2 border-[#4b5563] rounded-full p-3 mx-1">
            <FaLinkedinIn className="text-sm" />
          </a>
          <a href="#" className="border-2 border-[#4b5563] rounded-full p-3 mx-1">
            <FaGoogle className="text-sm" />
          </a>
        </div>
        <p className="text-[#737373] my-3">use ID account</p>
        <div className="flex flex-col items-center">
          <div className="bg-[#6b7280] w-64 p-2 flex items-center mb-3 rounded-xl">
            <FaEnvelope className="text-[#fafafa] m-2"  />
          <input type="email" name="email" placeholder="email" className="bg-[#6b7280] outline-none text-sm flex-1" />
          </div>
          <div className="bg-[#6b7280] w-64 p-2 flex items-center mb-3 rounded-xl">
            <HiLockClosed className="text-[#fafafa] m-2"  />
          <input type="password" name="password" placeholder="password" className="bg-[#6b7280] outline-none text-sm flex-1" />
          </div>
          <div className="flex w-64 mb-5">
            <label className="flex items-center text-xs">
              <input type="checkbox" name="remember" className="mr-1"/>remember me?
            </label>
          </div>
          <a href="/dashboard" className="border-2 bg-[#fafafa] rounded-full px-12 py-2 inline-block font-ssemibold hover:bg-[#0ea5e9] hover:text-[#fafafa]">Login</a>
        </div>
        </div>
    </div>
    <div className="w-2/5 bg-[#1C4C74] rounded-tr-2xl rounded-br-2xl py-36 px-12">
      <h2 className="text-3xl font-bold mb-2 text-[#fafafa]">Welcome..!!</h2>
      <div className="border-2 border-[#fafafa] w-10 bg-[#fafafa] inline-block"></div>
      <p className="text-[#fafafa] mb-2">student data management app</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
 };
>>>>>>> 7279aca53da6dfc40e0d0d3571795f266d8a14bb
