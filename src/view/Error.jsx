import React from "react";
import error from "../assets/error.png";

export default function Error() {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-center items-center h-full flex-col">
        <img src={error} alt="" className="w-[400px]" />
        <h1 className="font-jakarta font-bold text-[32px]">
          SORRY THIS PAGE IS STILL ON PROGRESS
        </h1>
      </div>
    </div>
  );
}
