import AnimatedText from "@/Components/AnimatedText";
import React from "react";
import Image from "next/image";
import cart from "../img/cartt.png";
import cards from "../img/cards.png";
import QA from "../img/QQQ-removebg-preview.png";
import team from "../img/team.jpg";
import FooterEnd from "@/Components/FooterEnd";
import FooterMail from "@/Components/FooterMail";
const Aboutpage = () => {
  return (
    <div>
      <div className="text-white font-bold text-3xl p-16 bg-pink-300">
        <h2>About Us</h2>
        <div className="columns-2 text-right ... ">
          <AnimatedText
            text="We Provide you the best quality product & quick free 
            deliver services.You can add payment with card and cash on deliver.
             We also provide you all kind of internation branded products.
             Our team insure the quality of all product before deliver "
          />

          <div className="columns-2 center text-center py-5 ml-25">
            <Image
              src={cart}
              alt="cart"
              className=" w-[100%] h-auto object-right ml-20 md:w-[100%]  sm:w-[80]"
              height={100}
              width={150}
            />
            <Image
              src={cards}
              alt="cart"
              className=" w-[100%] h-auto object-right ml-20 "
              height={100}
              width={150}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 m-8">
        <div className="w-full h-auto  ">
          <Image
            src={QA}
            alt="QualityProduct "
            className="bg-pink-300 rounded-tl-[25px] ... rounded-br-[25px] ..."
            height={350}
            width={500}
          />
        </div>

        <div>
          <h2 className="font-bold text-3xl">Product Quality</h2>
          <p className="mt-3">
            Quality assurance and control are the activities and methods that
            ensure that we insure that our product meets the defined quality
            standards and metrics, and that any defects are detected and
            corrected before they reach the customer.
          </p>
          <button className="bg-white hover:bg-pink-300 border hover:border-gray-600 rounded-lg mt-8 w-40">
            Read more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 m-8">
        <div>
          <h2 className="font-bold text-3xl">Our Team</h2>
          <p className="mt-3">
            our team make sure the quality of product and are the activities and
            methods that ensure that we insure that our product meets the
            defined quality standards and metrics, and that any defects are
            detected and corrected before they reach the customer.
          </p>
          <button className="bg-white hover:bg-pink-300 border hover:border-gray-600 rounded-lg mt-8 w-40">
            Read more
          </button>
        </div>
        <div className="w-full h-auto  ">
          <Image
            src={team}
            alt="QualityProduct "
            className="rounded-tl-[25px] ... rounded-br-[25px] ..."
            height={350}
            width={500}
          />
        </div>
      </div>
      <FooterEnd />
      <FooterMail />
    </div>
  );
};

export default Aboutpage;
