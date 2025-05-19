"use client";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import {
  FiSettings,
  FiBell,
  FiBarChart2,
  FiDollarSign,
  FiPieChart,
  FiBox,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import FirstChart from "./FirstChart";
import SecondChart from "./SecondChart";
import ThirdChart from "./ThirdChart";

import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import First from "./First";

export default function Second() {
  const [toggle, setToggle] = useState(false);
  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);
  const [toggleDropdown3, setToggleDropdown3] = useState(false);
  const [toggleDropdown4, setToggleDropdown4] = useState(false);
  const [toggleDropdown5, setToggleDropdown5] = useState(false);
  const [toggleDropdown6, setToggleDropdown6] = useState(false);
  const [toggleDropdown7, setToggleDropdown7] = useState(false);

  // for(let x=1; x<8; x++) {
  //     const [toggleDropdown{`x`}, setToggleDropdown1] = useState(false)

  // }

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white w-100 border-b border-gray-300 md:justify-end">
        <div className="flex cursor-pointer md:hidden">
          <button onClick={() => setToggle((prev) => !prev)}>
            {toggle ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        <div className="flex justify-end items-center gap-x-6">
          <div className="cursor-pointer" style={{ height: "100%" }}>
            <FiSettings size={20} className="text-graytext" />
          </div>

          <div className="relative inline-block cursor-pointer">
            <FiBell size={20} className="text-graytext" />
            <span
              className="absolute top-0 right-0 -mt-2 -mr-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-normal"
              style={{ fontSize: "10px" }}
            >
              5
            </span>
          </div>
          <div className="flex items-center gap-x-2 ml-auto cursor-pointer">
            <div className="">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-8 rounded-full"
                alt="Avatar"
              />
            </div>
            <div className="">
              <p className="font-bold xss">Stephen Autsin</p>
              <p className="xss text-graytext">Chief Manager</p>
            </div>
            <div className="text-sm ml-1 text-graytext">
              <GoTriangleDown />
            </div>
          </div>
        </div>
      </nav>

      {/* {toggle && (
                <First/>
            )} */}

      {toggle ? <First /> : ""}

      <section className="px-7 py-11">
        {/* Initial part */}
        <div className="flex justify-between items-center pb-9">
          <div>
            <h1 className="font-medium text-xl" style={{ fontSize: "19px" }}>
              Dashboard
            </h1>
          </div>

          <div
            className="xss p-2 bg-white rounded-md inline border border-gray-300 font-medium cursor-pointer"
            onClick={() => setToggleDropdown1((prev) => !prev)}
          >
            <p className="flex items-center text-graytext">
              <span>12 June 19 to 16 June 19</span>&nbsp;
              <span>
                <GoTriangleDown />
              </span>
            </p>
          </div>
        </div>

        {/* first part */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cold-3 lg:grid-cols-4 pb-9">
          <div className="col-span-1 flex items-center bg-white p-4 rounded-md border border-gray-300">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <FiBarChart2 className="text-white" />
            </div>
            <div className="flex-grow text-end">
              <p className="font-bold text-md">$21,844.00</p>
              <p className="xss text-graytext">Total Sales</p>
            </div>
          </div>

          <div className="col-span-1 flex items-center bg-white p-4 rounded-md border border-gray-300">
            <div className="p-2 bg-pink-500 rounded-lg">
              <FiDollarSign className="text-white" />
            </div>
            <div className="flex-grow text-end">
              <p className="font-bold text-md">$20,650.00</p>
              <p className="xss text-graytext">Total Cost</p>
            </div>
          </div>

          <div className="col-span-1 flex items-center bg-white p-4 rounded-md border border-gray-300">
            <div className="p-2 bg-blue-500 rounded-lg">
              <FiBox className="text-white" />
            </div>
            <div className="flex-grow text-end">
              <p className="font-bold text-md">5420</p>
              <p className="xss text-graytext">Products Sold</p>
            </div>
          </div>

          <div className="col-span-1 flex items-center bg-white p-4 rounded-md border border-gray-300">
            <div className="p-2 bg-purple-500 rounded-lg">
              <FiPieChart className="text-white" />
            </div>
            <div className="flex-grow text-end">
              <p className="font-bold text-md">$2,060,560.00</p>
              <p className="xss text-graytext">Stock on Hand</p>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3 pb-9">
          <div className="col-span-1">
            <div className="bg-white rounded-md divide-y divide-gray-300 border border-gray-300">
              <div className="p-2 px-4 flex justify-between items-center">
                <p className="font-bold text-sm">Revenue vs Costs</p>
                <p className="hover:cursor-pointer text-graytext">
                  <BiDotsHorizontalRounded />
                </p>
              </div>
              <div className="pl-2">
                <FirstChart />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-md divide-y divide-gray-300 border border-gray-300">
              <div className="p-2 px-4 flex justify-between items-center">
                <p className="font-bold text-sm">Purchase Summary</p>
                <p className="hover:cursor-pointer text-graytext">
                  <BiDotsHorizontalRounded />
                </p>
              </div>
              <div className="pl-2">
                <SecondChart />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-md divide-y divide-gray-300 border border-gray-300">
              <div className="p-2 px-4 flex justify-between items-center">
                <p className="font-bold text-sm">Number of Units Sold</p>
                <p className="hover:cursor-pointer text-graytext">
                  <BiDotsHorizontalRounded />
                </p>
              </div>
              <div className="pl-2">
                <ThirdChart />
              </div>
            </div>
          </div>
        </div>

        {/* third part */}
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-1 lg:grid-cols-3 lg:gap-6">
          <div className="col-span-2">
            <div className="bg-white rounded-md divide-y divide-gray-300 border border-gray-300">
              <div className="p-2 px-4 flex justify-between items-center">
                <p className="font-bold text-sm">Sales Orders</p>
                <p className="hover:cursor-pointer text-graytext">
                  <BiDotsHorizontalRounded />
                </p>
              </div>
              <div>
                <FirstTable />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-md divide-y divide-gray-300 border border-gray-300">
              <div className="p-2 px-4 flex justify-between items-center">
                <p className="font-bold text-sm">Purchase Orders</p>
                <p className="hover:cursor-pointer text-graytext">
                  <BiDotsHorizontalRounded />
                </p>
              </div>
              <div>
                <SecondTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
