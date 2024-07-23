"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Day7KeyFramerAnimation = (props: Props) => {
  const numDots = 20;
  const radius = 100;
  const angles = Array.from({ length: numDots }, (_, i) => (i * 360) / numDots);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="relative h-52 w-52 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 7 * 3,
          ease: "linear",
        }}
      >
        {angles.map((angle, index) => (
          <div
            key={index}
            className="absolute h-4 w-4 rounded-full bg-cyan-500 z-10"
            style={{
              transform: `translate(${
                Math.cos((angle * Math.PI) / 180) * radius
              }px, ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
            }}
          />
        ))}
      </motion.div>
    </main>
  );
};

export default Day7KeyFramerAnimation;
