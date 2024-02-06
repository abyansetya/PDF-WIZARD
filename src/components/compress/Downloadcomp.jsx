import React from "react";
import circle from "../../assets/Ellipse 32.svg";
import merge from "../../assets/checked.svg";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import Footer from "../hero/Footer";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className={`font-jakarta w-full overflow-hidden flex  bg-gradient-to-tr  from-red-500 via-red-400 to-red-400 h-[50vh] relative z-2`}
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
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex w-full justify-center items-center ">
          <img src={merge} alt="" className="w-[50px]" />
          <h1 className="text-white text-[32px]">Compress PDF Successfully!</h1>
        </div>
        <p className="text-[14px] mt-2 text-white">
          CLICK ON BELOW BUTTON TO DOWNLOAD COMPRESSED PDF
        </p>
      </div>
    </section>
  );
}

export default function Downloadcomp() {
  return (
    <>
      <Hero />
      <div className="p-[10em] w -full font-jakarta">
        <div className="flex justify-center items-center">
          <Link to="/Compress">
            <button className="mr-2 rounded-full border-none bg-[#2f2e2e] w-[30px] h-[30px] flex items-center  justify-center mb-1 text-white">
              <IoArrowBackOutline />
            </button>
          </Link>
          <button className="w-[400px] h-[90px] border-2 bg-[#e76a6a] border-none rounded text-white">
            <p className="text-[20px]">Download Compressed PDF</p>
          </button>
          <div className="ml-2 flex-col flex justify-center ">
            <button className="rounded-full border-none bg-[#e76a6a] w-[30px] h-[30px] flex items-center justify-center mb-1 text-white">
              <FaEye />
            </button>
            <Link to="/Compress">
              <button className="rounded-full border-none bg-[#e76a6a] w-[30px] h-[30px] items-center justify-center flex text-white">
                <FaTrash />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
