// import { Main } from "next/document";
import Layoutindex from "../components/Layoutindex";
import Head from "next/head";

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
                <h2 className="text-3xl font-bold text-[#2563eb]">
                  Sign in to Access
                </h2>
                <div className="border-2 w-10 bg-[#6b21a8] inline-block"></div>
              </div>
            </div>
            <div className="w-2/5 rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2 text-[#bef264]">
                Welcome..!!
              </h2>
              <div className="border-2 w-10 bg-[#6b21a8] inline-block"></div>
              <p className="mb-2">student data management app</p>
            </div>
          </div>
        </div>
      </div>
    </Layoutindex>
  );
}
