import React from "react";
import howto from "../../assets/howto.svg";

export default function Howto() {
  return (
    <div className="p-[6em] w-full">
      <div className="innercontainy flex w-full justify-center items-center gap-[100px]">
        <img src={howto} alt="" className="w-[400px]" />
        <div className="text">
          <h1 className="font-bold text-[24px]">
            How To Merge PDF Files Online:
          </h1>
          <ol className="mt-4">
            <li className="mb-2">
              1. Drag & drop your files into the online Merge PDF tool.
            </li>
            <li className="mb-2">
              2. Rearrange individual pages or entire files as needed.
            </li>
            <li className="mb-2">
              3. Add more files, rotate, or delete pages or whole files.
            </li>
            <li>4. Click “Merge PDF!” to combine and download your PDF.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
