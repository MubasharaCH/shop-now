import { Input } from "postcss";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Link from "next/link";
const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-pink-300 ml-8">
          ShOpNoW
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className=" border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any Product name.."
          />
          <BsSearch
            className="absolute  right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>
        <div className=" flex lg-flex gap-4 text-gray-500 text-[30px] ">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
          text-white grid place-items-center translate-x-l -translate-y-l"
            >
              {" "}
              0
            </div>
          </div>
          <div className="relative">
            <Link href="/Cart">
              <HiOutlineShoppingBag />
            </Link>
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
          text-white grid place-items-center translate-x-l -translate-y-l"
            >
              {" "}
              0
            </div>
          </div>
          <div className="relative">
            <BsMoon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
