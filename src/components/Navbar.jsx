import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import del from "../assets/delete.svg";
import ext from "../assets/extract.svg";
import rot from "../assets/rotate.svg";
import split from "../assets/split.svg";
import pdf from "../assets/pdf.svg";
import word from "../assets/word.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-[#C64E4E] opacity-[90%] ease-linear duration-200" : ""
      }
        p-6 w-full fixed z-[999] font-jakarta font-bold text-white`}
    >
      <div className=" flex items-center text-[12px]  ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[40px] mr-2" />
        </Link>
        {/* <Togglebutton/> */}
        <div className="navbar-container flex ml-[80px] w-full items-center ">
          <ul className="navbar-nav flex gap-[50px]">
            <li className="nav-item">
              <Link to="/Merge">MERGE</Link>
            </li>
            <li className="nav-item">
              <Link to="/Sign">SIGN</Link>
            </li>
            <li>
              <Link to="/Compress">COMPRESS</Link>
            </li>

            <motion.li
              onMouseEnter={() => setBuka(true)}
              onMouseLeave={() => setBuka(false)}
              className="nav-dropdown flex items-center gap-1"
            >
              <Link to="/Compress">CONVERT</Link>
              <motion.div
                className="w-5 h-5"
                initial={{ rotate: -90 }}
                animate={buka ? { rotate: 0 } : { scale: 1 }}
              >
                <TiArrowSortedDown className="w-full h-full" />
              </motion.div>
              {buka && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "-40%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-[65px]  bg-white border-2 rounded-xl border-white text-black"
                >
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                  <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <ConverContent />
                </motion.div>
              )}
            </motion.li>

            <motion.li
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="nav-dropdown flex items-center gap-1"
            >
              <Link to="/Tools">TOOLS</Link>
              <motion.div
                className="w-5 h-5"
                initial={{ rotate: -90 }}
                animate={open ? { rotate: 0 } : { scale: 1 }}
              >
                <TiArrowSortedDown className="w-full h-full" />
              </motion.div>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "-40%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-[65px]  bg-white border-2 rounded-xl border-white text-black"
                >
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                  <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <ToolsContent />
                </motion.div>
              )}
            </motion.li>
          </ul>
          <div className="navbar-login flex w-full justify-end gap-5 mr-[30px] items-center ">
            <button>
              <Link to="/Login">LOG IN</Link>
            </button>

            <button className="border-white bg-white text-black rounded-[10px]  border-2 w-[100px] h-[40px]">
              <Link to="/Signup">SIGN UP</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ToolsContent = () => {
  return (
    <div className="w-64   px-6 py-4 shadow-xl">
      <div className="contain flex w-full flex-col">
        <Link to="/error" className="inner mb-4  flex items-center gap-3">
          <img src={del} alt="" className="w-[24px] h-[24px]" />
          <p>Delete PDF Pages</p>
        </Link>
        <Link to="/error" className="inner mb-4  flex items-center gap-3">
          <img src={split} alt="" className="w-[24px] h-[24px]" />
          <p>Split PDF</p>
        </Link>
        <Link to="/error" className="inner mb-4  flex items-center gap-3">
          <img src={ext} alt="" className="w-[24px] h-[24px]" />
          <p>Extract PDF</p>
        </Link>
        <Link to="/error" className="inner   flex items-center gap-3">
          <img src={rot} alt="" className="w-[24px] h-[24px]" />
          <p>Rotate PDF</p>
        </Link>
      </div>
    </div>
  );
};

function ConverContent() {
  return (
    <div className="w-64   px-6 py-4 shadow-xl">
      <div className="contain flex w-full flex-col">
        <Link to="/error" className="inner mb-4  flex items-center gap-3">
          <img src={word} alt="" className="w-[24px] h-[24px]" />
          <p>Word To PDF</p>
        </Link>
        <Link to="/error" className="inner flex items-center gap-3">
          <img src={pdf} alt="" className="w-[24px] h-[24px]" />
          <p>PDF To Word</p>
        </Link>
      </div>
    </div>
  );
}
