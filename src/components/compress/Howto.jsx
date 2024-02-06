import React from "react";
import howto from "../../assets/compress 1.svg";

export default function Howto() {
  return (
    <div className="px-[6em] py-[8em] w-full flex">
      <div className="innercontainy flex  flex-row-reverse w-full justify-center items-center gap-[100px]">
        <img src={howto} alt="" className="w-[400px]" />
        <div className="text">
          <h1 className="font-bold text-[24px]">
            How To Compress PDF Online for Free
          </h1>
          <ol className="mt-4">
            <li className="mb-2">
              1. Upload your file by dropping it onto this page
            </li>
            <li className="mb-2">2. Select your desired compression level</li>
            <li className="mb-2">
              3. Continue to edit the PDF with our other tools if needed
            </li>
            <li>4. Click “Download” to save your compressed PDF</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
