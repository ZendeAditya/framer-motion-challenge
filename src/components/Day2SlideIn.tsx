"use client";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, Variants } from "framer-motion";
type Props = {};
const Links = [
  { link: "/Home", name: "Home" },
  { link: "/About", name: "About" },
  { link: "/Contact", name: "Contact" },
  { link: "/Blog", name: "Blog" },
  { link: "/Portfolio", name: "Portfolio" },
  { link: "/FAQ", name: "FAQ" },
];

const UlVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1.5,
      delayChildren: 1.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300,
      delay: 0.4,
    },
  },
};
const Day2SlideIn = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <section className=" ">
        <motion.button onClick={handleMenu} className="cursor-pointer">
          {!open ? <RxHamburgerMenu size={26} /> : <RxCross2 size={26} />}
        </motion.button>
        <motion.ul
          variants={UlVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`flex flex-col gap-4 ps-4 ${
            open ? "block" : "hidden"
          } duration-300 py-3  bg-orange-500 w-52 h-72 rounded-lg shadow-lg hover:shadow-orange-300 absolute`}
        >
          {Links.map((link, idx) => (
            <motion.li
              variants={liVariants}
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              transition={{
                duration: 0.2 * idx,
                ease: "easeInOut",
              }}
              className=" text-lg "
              key={idx}
            >
              {link.name}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </>
  );
};

export default Day2SlideIn;
