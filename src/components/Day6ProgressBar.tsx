"use client";
import React from "react";
import LoremIpsum from "./LoremIpsum";
import { motion, useScroll } from "framer-motion";
type Props = {};

const Day6ProgressBar = (props: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          height: "10px",
          width: scrollYProgress,
          backgroundColor: "red",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          scaleX: scrollYProgress,
          transformOrigin: 0,
        }}
      ></motion.div>
      <div className="px-4 py-4">
        <LoremIpsum />
        <LoremIpsum />
      </div>
    </>
  );
};

export default Day6ProgressBar;
