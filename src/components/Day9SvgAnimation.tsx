"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Day9SvgAnimation = (props: Props) => {
  return (
    <div>
      <motion.svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
          fill="none"
          d="M17.1,-9.3C21.1,-2.8,22.7,5.6,19.5,13.5C16.2,21.5,8.1,28.9,-2.5,30.3C-13.1,31.8,-26.2,27.2,-29.3,19.4C-32.4,11.5,-25.5,0.4,-19,-7.6C-12.4,-15.5,-6.2,-20.2,0.1,-20.3C6.5,-20.4,13,-15.8,17.1,-9.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="1"
          style={{
            transition: "0.3s",
          }}
          stroke="url(#sw-gradient)"
        ></motion.path>
      </motion.svg>
      <div className="w-96" />
    </div>
  );
};

export default Day9SvgAnimation;
