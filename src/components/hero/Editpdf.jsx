import React from "react";
import { Link } from "react-router-dom";
import esign1 from "../../assets/esign1.svg";
import perfect from "../../assets/perfect1.svg";

export default function Editpdf() {
  return (
    <div className=" font-jakarta w-full p-[4em]">
      <div className="flex w-full items-center justify-center gap-4">
        <div className="flex flex-col w-[500px]">
          <h1 className="text-[40px] font-bold">
            Digital Signatures Made Easy
          </h1>
          <p className="mt-4 text-[#88879e]">
            Fill in forms, e-sign contracts, and close deals in a few simple
            steps. You can also request e-signatures and track your document
            every step of the way
          </p>
          <Link>
            <button className="border-2 text-center mt-4  w-[150px] h-[39px] bg-[#1FB6FC] rounded-[10px] items-center text-white border-none ">
              Try eSign
            </button>
          </Link>
        </div>
        <div>
          <img src={esign1} alt="" className="w-[500px]" />
        </div>
      </div>

      <div className="pt-6 flex flex-row-reverse w-full items-center justify-center gap-4 pb-6">
        <div className="flex flex-col w-[500px]">
          <h1 className="text-[40px] font-bold">Create the Perfect Document</h1>
          <p className="mt-4 text-[#88879e]">
            File too big? Compress it. Need a specific format? Convert it.
            Things getting chaotic? Merge and split files, or remove excess
            pages. Smallpdf has it all.
          </p>
          <Link>
            <button className="border-2 text-center mt-4  w-[150px] h-[39px] bg-[#1FB6FC] rounded-[10px] items-center text-white border-none text-[12px] ">
              View All PDF Tools
            </button>
          </Link>
        </div>
        <div>
          <img src={perfect} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}
