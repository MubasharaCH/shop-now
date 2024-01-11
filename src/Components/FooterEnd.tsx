import React from "react";
import { FcHome } from "react-icons/fc";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterEnd = () => {
  return (
    <div className="bg-black  h-1/2 w-full flex md:flex-row flex-col justify-around items start p-20">
      <div className="p-5">
        <ul>
          <p className="text-pink-600 font-medium text-3xl pb-6">
            ShOp<span className="text-pink-600">NoW</span>
          </p>
          <div className="flex gap-6 pb-5">
            <FaFacebook className=" text-2xl text-white curser-pointer hover:text-blue-300" />
            <FaInstagram className="text-2xl text-white curser-pointer hover:text-pink-300" />
          </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-medium curser-pointer text-2xl pb-4">
            Terms and conditions
          </p>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            Terms and conditions
          </li>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            Previcy Policy
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-medium cursor-pointer text-2xl pb-4">
            Customer Service
          </p>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            Contact Us
          </li>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            About us
          </li>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            FAQ
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-medium  text-2xl pb-4">Quick Links</p>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            All Products
          </li>
          <li className="text-gray-300 text-md pb-2 font-semibold curser-pointer">
            Categories
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-medium  text-2xl pb-4">Find Us</p>
          <div className="header_top_icon_wrapper ">
            <FcHome size={20} />
          </div>
          <li className="text-white text-md pb-2 font-semibold curser-pointer">
            2614 NE 18th Terrace, Gainesville, FL 32609, USA
          </li>
          <div className="header_top_icon_wrapper text-white rounded-full  ">
            <MdMarkEmailUnread size={20} />
          </div>
          <li className="text-white text-md pb-2 font-semibold curser-pointer">
            mubasharach@gmail.com
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default FooterEnd;
