import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { BiHome, BiHomeAlt2, BiSolidCategory } from "react-icons/bi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev < latest) {
      setOpen(false);
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  const menuVarient = {
    initial: {
      y: "160%",
    },
    animate: {
      y: 0,
    },
  };

  const navMenu1 = {
    animate: { x: 0, y: "-120%", rotate: 0 },
    initial: { x: -6, y: -5, opacity: 0, rotate: 45, borderRadius: "100%" },
  };
  const navMenu2 = {
    animate: { x: "-120%", y: "-120%", rotate: 0 },
    initial: { x: -6, y: -5, opacity: 0, rotate: 45, borderRadius: "100%" },
  };
  const navMenu3 = {
    animate: { x: "-120%", y: 0, rotate: 0 },
    initial: { x: -6, y: -5, opacity: 0, rotate: 45, borderRadius: "100%" },
  };

  return (
    <motion.div
      variants={menuVarient}
      animate={hidden ? "animate" : "initial"}
      className={`fixed bottom-2 right-2  w-12 h-12 flex justify-center items-center text-3xl rounded-full bg-primary text-secondary`}
    >
      <motion.div
        variants={navMenu1}
        animate={open ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.1, ease: "circInOut" }}
        onClick={()=>{nav('/');setOpen(false)}}
        className="absolute rounded-md bg-primary w-11 h-11 flex justify-center items-center -z-10"
      >
        <AiFillHome className="text-xl" />
      </motion.div>
      <motion.div
        variants={navMenu2}
        animate={open ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2, ease: "circInOut" }}
        onClick={()=>{nav('/create');setOpen(false)}}
        className="absolute rounded-md bg-primary w-11 h-11 flex justify-center items-center -z-10"
      >
        <IoIosCreate className="text-xl" />
      </motion.div>
      <motion.div
        variants={navMenu3}
        animate={open ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.3, ease: "circInOut" }}
        className="absolute rounded-md bg-primary w-11 h-11 flex justify-center items-center -z-10"
      >
        <BsPeopleFill className="text-xl" />
      </motion.div>
      <div onClick={() => setOpen(!open)}>
        <BiSolidCategory
          className={`${
            open
              ? "rotate-45 opacity-0"
              : "rotate-0 absolute transition-all duration-500"
          }`}
        />
        <RxCross2
          className={`${
            !open
              ? "-rotate-45 opacity-0"
              : "rotate-0 absolute top-2 transition-all duration-500"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default BottomNavbar;
