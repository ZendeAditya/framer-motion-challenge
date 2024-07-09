"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
type Props = {};

const Day3Button = (props: Props) => {
  return (
    <div>
      <motion.button
        className="py-2 w-52 ring-2 rounded-lg"
        whileTap={{ scale: 1.2 }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default Day3Button;
