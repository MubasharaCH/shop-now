"use client";
import React from "react";
import { motion } from "framer-motion";
interface propsType {
  text: String;
}
const AnimatedText: React.FC<propsType> = ({ text }) => {
  const qoute = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const singleword = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div
      className=" mx-auto py-2 flex item center justify-center text-left
      overFlow-hidden"
    >
      <motion.h1
        className={
          "inline-block w-full text-black font-bold capitalize text-xl text-white sm:text-xs md:text-sm"
        }
        variants={qoute}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleword}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
