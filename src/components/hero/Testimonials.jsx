import React from "react";
import ellipse from "../../assets/Ellipse 32.svg";

export default function Testimonials() {
  return (
    <>
      <div className="absolute ">
        <img src={ellipse} alt="" />
      </div>
      <div className="absolute right-0 rotate-180 translate-y-4">
        <img src={ellipse} alt="" />
      </div>
      <div className="p-[6em] font-jakarta bg-[#e76a6a] m-4  border-2 rounded-xl border-none">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] font-bold text-white ">
            The PDF software trusted by millions of users
          </h1>
          <p className="text-white text-center pt-4 w-[800px] text-[16px]">
            PDF Wizard is your number one web app for editing PDF with ease.
            Enjoy all the tools you need to work efficiently with your digital
            documents while keeping your data safe and secure.
          </p>
          <div className="flex pt-[90px] gap-[200px]">
            <img
              className="w-[55px] h-[25px] "
              src="https://www.ilovepdf.com/img/logos/pdf-association-logo.svg"
              alt=""
            />
            <img
              className="w-[55px] h-[25px] "
              src="https://www.ilovepdf.com/img/logos/iso-logo.svg"
              alt=""
            />
            <img
              className="w-[55px] h-[25px] "
              src="	https://www.ilovepdf.com/img/logos/ssl-encrypted-logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
