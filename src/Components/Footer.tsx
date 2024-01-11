import React from "react";
import { FcHome } from "react-icons/fc";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black w-full h-auto">
      <div className="container flex bg-black mt-10 ml-0 mr-0 pt-16 pb-1 ml-6 mb-1">
        <div className="row">
          <div className="col-lg-3 col-md-3 ">
            <h3 className="text-white font-medium ml-6 ">Find us</h3>
            <div className="header_top_icon_wrapper grid ml-6">
              <FcHome size={20} />
            </div>
            <h4 className="text-gray-300 ml-6 warpper">
              2614 NE 18th Terrace, Gainesville, FL 32609, USA
            </h4>
            <div className="header_top_icon_wrapper text-white rounded-full  ">
              <MdMarkEmailUnread size={20} />
            </div>
            <h6 className="text-gray-300 ml-6">mubasharach@gmail.com</h6>
          </div>
        </div>
        <div className=" grid-cols-3 cols-lg-9 col-sm-3 col-xs-12 text-white ml-6">
          <h2 className="text-white font-mediun text-xl ">
            Terms & Conditions
          </h2>
          <h6 className="text-gray-300">Terms and conditions</h6>
          <h6 className="text-gray-300">privecy policy</h6>
        </div>
        <div className=" grid-cols-3 cols-lg-9 text-white ml-6">
          <h2 className="text-white font-mediun text-xl ">Customer Service</h2>
          <h6 className="text-gray-300">Contact Us</h6>
          <h6 className="text-gray-300">About us</h6>
          <h6 className="text-gray-300">FAQ</h6>
        </div>
        <div className=" grid-cols-3 cols-lg-9 text-white ml-6">
          <h2 className="text-white font-mediun text-xl ">Quick Links</h2>
          <h6 className="test-white-600">All Products</h6>
          <h6>Categories</h6>
        </div>
        <div className=" grid-cols-3 cols-lg-9 text-white ml-6">
          <h2 className=" text-white font-mediun text-xl ">Follow us</h2>
          <div className="flex ml-3">
            <div className="header_top_icon_wrapper bg-blue-500 rounded-full  ">
              <BsFacebook size={20} />
            </div>
            <div className="header_top_icon_wrapper ml-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full bold">
              <BsInstagram size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
