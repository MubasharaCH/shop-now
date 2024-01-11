import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}
const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative ">
      <Image
        className="w-[100%] h-[200px] md:h-auto rounded-xl object-cover object-right 
        md:object-left-bottom sm:p-0"
        src={img}
        alt="banner"
        height={2000}
        width={2000}
      />
      <div
        className="absolute left-[30px] md:left-[80px] max-w-[250px] sm:max-w-[200px] sm-space-y-1
       top-[50%] -translate-y-[50%] space-y-2 lg-space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 
       sm:p-0 rounded-lg sm:rounded-none  sm:mt-1"
      >
        <h3 className="text-accent text-[24px] lg:text-[28px] sm:text-[3px]  md:text-[18px]">
          {title}
        </h3>
        <h2 className="text-black text-[26px]  md:text-[25px] lg:text-[44px] sm:text-[5px]  font-bold loading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-500">
          Stating at{" "}
          <b className="text-[20px] md:text-[18px] lg:text-[30px] sm:text-[3px]">
            {price}
          </b>
          .00
        </h3>
        <div
          className="bg-accent text-white text-[14px] md:text-[16px]  sm:text-[2px] p-2 px-4 rounded-lg
       inline-block cursor-pointer bg-pink-600 hover:bg-black"
        >
          {" "}
          Shop Now
        </div>
      </div>
    </div>
  );
};

export default Slide;
