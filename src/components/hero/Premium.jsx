import React from "react";
import premium from "../../assets/premium.svg";
import { Link } from "react-router-dom";

export default function Premium() {
  return (
    <div className="p-[6em] font-jakarta">
      <div className="flex justify-between gap-[50px] items-center">
        <div className="flex flex-col mr-4">
          <h1 className="text-[48px] font-bold">Get more with premium</h1>
          <p className="translate-x-1 w-[650px] mt-4 text-[18px]">
            Complete projects faster with batch file processing, convert scanned
            documents with OCR and e-sign your business agreements.
          </p>
          <Link>
            <button className="mt-[40px] border-2 w-[150px] h-[39px] bg-[#BC6FF1] rounded-[10px] text-white border-none ">
              Get Premium
            </button>
          </Link>
        </div>
        <div>
          <img src={premium} alt="" />
        </div>
      </div>
    </div>
  );
}
