"use client";
import React from "react";

import { motion, MotionProps } from "framer-motion";
type Props = MotionProps & {};

const Day1TextFadeIn = (props: Props) => {
  let str = " Welcome to My 50 Days of Framer Motion Challenge!";
  let para =
    "Discover daily animated creations and watch as static elements come to life. Join me on this exciting journey of mastering motion design.";
  return (
    <div className="w-screen flex items-center justify-center min-h-screen flex-col px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold">
        {" "}
        {str.split("").map((char, ind) => (
          <motion.span
            key={ind}
            initial={{ opacity: 0, color: "blue" }}
            animate={{ opacity: 1, color: "orange" }}
            transition={{ duration: 0.3 * (ind / 2) }}
          >
            {char}
          </motion.span>
        ))}
      </h2>
      <motion.p
        initial={{ y: 52, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 * 0.1 }}
        className="px-5 py-4"
      >
        {para.split("").map((str, idx) => {
          return (
            <motion.span
              initial={{ y: 0, x: 0, opacity: 0 }}
              animate={{ y: 0, x: 52, opacity: 1 }}
              transition={{ duration: 0.2 * idx, delay: idx * 0.1 }}
              key={idx}
            >
              {str}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};

export default Day1TextFadeIn;
