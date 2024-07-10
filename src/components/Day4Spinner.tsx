"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {};

const SpinnerBtn = () => {
  return (
    <motion.button
      className="spinner text-white px-4 py-2 rounded-md flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="animate-spin h-5 w-5 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </motion.button>
  );
};

const Day4Spinner = (props: Props) => {
  const [text, setText] = useState(true);
  const handleText = () => {
    setText((prev) => !prev);
    setTimeout(() => {
      setText(true);
    }, 5000);
  };
  return (
    <section>
      <motion.button
        className="border-2 bg-black w-40 h-10 rounded-lg text-white flex items-center justify-center"
        onClick={handleText}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {text ? "Submit" : <SpinnerBtn />}
      </motion.button>
    </section>
  );
};

export default Day4Spinner;
