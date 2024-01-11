import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
const MobNavebar = () => {
  return (
    <div
      className="lg:hidden fixed bottom-0  bg-white w-full left-[50%] -translate-x-[50%] max-w-[700px] mob_navbar
      px-8 border border-gray-300 "
    >
      <div className="flex justify-between text-[40] py-2">
        <IoMenuOutline />
        <div className="relative ">
          <HiOutlineShoppingBag />
          <div
            className="bg-red-600 rounded-full absolute top-0 right-0 w-[10px] h-[10px] 
              text-[12px] text-white grid place-items-center translate-x-l -translate-y-l"
          >
            0
          </div>
        </div>
        <AiOutlineHome />
        <div className="relative">
          <FiHeart />
          <div
            className="bg-red-600 rounded-full absolute top-0 right-0 w-[10px] h-[10px] 
              text-[12px] text-white grid place-items-center translate-x-l -translate-y-l"
          >
            0
          </div>
        </div>
        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobNavebar;
