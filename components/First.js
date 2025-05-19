"use client";

import { PiFolderFill } from "react-icons/pi";
import {
  FiGrid,
  FiBox,
  FiUser,
  FiFileText,
  FiUsers,
  FiShoppingCart,
  FiTruck,
  FiBarChart,
  FiSettings,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";

export default function First() {
  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);
  const [toggleDropdown3, setToggleDropdown3] = useState(false);

  return (
    <>
      <div className="pt-4 bg-gray-900 lg:fixed">
        <div className="flex items-center ml-4 px-3 py-4 gap-x-2 md:px-0 md:pr-2 lg:px-3">
          <p className="text-xl text-gray-200">
            <PiFolderFill />
          </p>
          <p className="text-gray-200">
            <span className="font-semibold">Base</span>
            <span className="font-light">in</span>
            <span className="font-thin">vo</span>
          </p>
        </div>

        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiGrid />
            </p>
            <p className="text-xs">Dashboard</p>
          </div>
        </div>
        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiBox />
            </p>
            <p className="text-xs">Products</p>
          </div>
        </div>
        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4  gap-x-4">
            <p>
              <FiUser />
            </p>
            <p className="text-xs">Customer</p>
          </div>
        </div>
        <div
          className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3 lg:pr-6"
          onClick={() => setToggleDropdown1((prev) => !prev)}
        >
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiFileText />
            </p>
            <p className="text-xs">Sales</p>
            <p className="ml-auto">
              <FiChevronRight size={14} />
            </p>
          </div>
          {toggleDropdown1 && <Dropdown />}
        </div>
        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiUsers />
            </p>
            <p className="text-xs">Supplier</p>
          </div>
        </div>
        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiShoppingCart />
            </p>
            <p className="text-xs">Purchase</p>
          </div>
        </div>
        <div className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3">
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiTruck />
            </p>
            <p className="text-xs">Stock Transfer</p>
          </div>
        </div>
        <div
          className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3 lg:pr-6"
          onClick={() => setToggleDropdown2((prev) => !prev)}
        >
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiBarChart />
            </p>
            <p className="text-xs">Reports</p>
            <p className="ml-auto">
              <FiChevronRight size={14} />
            </p>
          </div>
          {toggleDropdown2 && <Dropdown />}
        </div>
        <div
          className="px-3 py-5 text-gray-400 hover:bg-gray-800  hover:text-neutral-100 hover:border-l-2 hover:border-blue-500 cursor-pointer md:px-0 md:pr-2 lg:px-3 lg:pr-6"
          onClick={() => setToggleDropdown3((prev) => !prev)}
        >
          <div className="flex items-center ml-4 gap-x-4">
            <p>
              <FiSettings />
            </p>
            <p className="text-xs">Settings</p>
            <p className="ml-auto">
              <FiChevronRight size={14} />
            </p>
          </div>
          {toggleDropdown3 && <Dropdown />}
        </div>
      </div>
    </>
  );
}

const Dropdown = () => {
  return (
    <div className="pl-12 gap-y-2 xss">
      <p className="pt-4">Option One</p>
      <p className="pt-4">Option Two</p>
      <p className="pt-4">Option Three</p>
    </div>
  );
};
