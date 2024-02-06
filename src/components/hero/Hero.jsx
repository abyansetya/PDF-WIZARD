import React from "react";
import { motion } from "framer-motion";
import heroimg from "../../assets/heroimg.svg";
import circle from "../../assets/Ellipse 32.svg";

export default function Hero() {
  return (
    <section
      className={`font-jakarta hero w-full overflow-hidden flex  bg-gradient-to-tr  from-red-500 via-red-400 to-red-400 pb-8`}
    >
      <div className="absolute">
        <img src={circle} alt="" />
      </div>
      <div className="z-0 flex flex-col right-0 w-full absolute top-[400px] items-end gap-2">
        <svg
          width="636"
          height="15"
          viewBox="0 0 636 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            width="636"
            height="15"
            fill="#D9D9D9"
            fillOpacity="0.4"
          />
        </svg>
        <svg
          width="636"
          height="15"
          viewBox="0 0 636 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.2" width="636" height="15" fill="#D9D9D9" />
        </svg>
        <svg
          width="636"
          height="15"
          viewBox="0 0 636 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            width="636"
            height="15"
            fill="#D9D9D9"
            fillOpacity="0.25"
          />
        </svg>
        <svg
          width="636"
          height="15"
          viewBox="0 0 636 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.2"
            width="636"
            height="15"
            fill="#D9D9D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="flex w-full h-full justify-between z-1 mt-[50px]">
        <div className="text flex flex-col justify-center items-center  pl-8">
          <h1 className="text-[32px] text-center font-bold text-white">
            Every tool you need to work with <br /> PDFs in one place
          </h1>
          <p className="text-[16px] text-center text-white mt-[11px]">
            All the tools you’ll need to be more productive and work <br />{" "}
            smarter with documents.
          </p>
          <div className="flex gap-[33px] mt-[36px] ">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="border-2 w-[150px] h-[39px] bg-[#1FB6FC] rounded-[10px] text-[12px] text-white border-none cursor-pointer z-[10]"
            >
              Start Free Trial
            </motion.button>
            <button className="border-2 w-[150px] h-[39px] bg-[#BC6FF1] rounded-[10px] text-[12px] text-white border-none cursor-pointer z-[10]">
              Explore All PDF Tools
            </button>
          </div>
        </div>
        <div className="z-[5]">
          <img src={heroimg} alt="" className="w-[600px]" />
        </div>
      </div>
    </section>
  );
}
