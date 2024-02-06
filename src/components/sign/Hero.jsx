import React from "react";
import circle from "../../assets/Ellipse 32.svg";
import merge from "../../assets/ttd.svg";

export default function Hero() {
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
          <h1 className="text-white text-[32px]">E-Sign PDF</h1>
        </div>
        <p className="text-[14px] mt-2 text-white">
          THE EASIEST WAY E-SIGN YOUR PDF FILES
        </p>
      </div>
    </section>
  );
}
