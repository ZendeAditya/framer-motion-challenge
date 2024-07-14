"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {};
const modalVariants: Variants = {
  initial: {
    opacity: 0,
    y: -500,
    scale: 0.5,
    transition: {
      duration: 0.5,
    },
    borderRadius: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: [0.8, 1],
    borderRadius: ["0%", "5%"],
    transition: {
      duration: 1,
      times: Infinity,
      stiffness: 150,
      type: "spring",
      damping: 12,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};
const textVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
      when: "easeInOut",
      staggerChildren: 0.5,
      delay: 0.85,
    },
  },
};
const charVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} variants={charVariants}>
      {char}
    </motion.span>
  ));
};

const Day5Progress = (props: Props) => {
  const text = "Modal With Fade in Animation!";
  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative">
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          className=" border-2 border-gray-400 w-96 h-52 text-center py-2 text-lg flex items-center justify-center min-h-52 rounded-xl shadow-xl"
        >
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {splitText(text)}
          </motion.h2>
        </motion.div>
      </div>
    </>
  );
};

export default Day5Progress;
