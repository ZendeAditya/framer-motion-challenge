"use client";
import React from "react";
import LoremIpsum from "./LoremIpsum";
import { motion, useScroll, useSpring } from "framer-motion";
type Props = {};

const Day6ProgressBar = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="progress rounded-full z-10"
        style={{ width: width }}
      ></motion.div>
      <div className="px-4 py-4">
        <LoremIpsum />
        <LoremIpsum />
      </div>
    </>
  );
};

export default Day6ProgressBar;
