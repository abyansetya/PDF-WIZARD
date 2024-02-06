import React from "react";
import word from "../../assets/word.svg";
import pdf from "../../assets/pdf.svg";
import { Link } from "react-router-dom";
import split from "../../assets/split.svg";
import merge from "../../assets/merge.svg";
import compress from "../../assets/compress.svg";
import jpgtopdf from "../../assets/jpgtopdf.svg";
import esign from "../../assets/esign.svg";
import editpdf from "../../assets/editpdf.svg";

export default function Tools() {
  return (
    <div className="font-jakarta contain flex py-[6em] px-[6em]  w-full">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-[32px] font-bold mb-2">Most Popular PDF Tools</h1>
          <p className="text-[16px]">
            21 Tools to convert, compress, and edit PDFs for free. Try it out
            today!
          </p>
        </div>
        <div className="flex gap-5 w-full justify-center mt-6 flex-wrap">
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={word} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">PDF To Word</h1>
              <p className="text-center text-[14px] mt-4">
                Convert PDF to editable word documents
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={pdf} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">PDF To Word</h1>
              <p className="text-center text-[14px] mt-4">
                Convert word documents to PDF
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={merge} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">Merge PDF</h1>
              <p className="text-center text-[14px] mt-4">
                Combine multiple PDFs into one unified documents
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={jpgtopdf} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">JPG to PDF</h1>
              <p className="text-center text-[14px] mt-4">
                Transform JPG, PNG, BMP, GIF, and TIFF images to PDF
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={esign} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">eSign PDF</h1>
              <p className="text-center text-[14px] mt-4">
                Create your signature, sign your PDF and request people to sign
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={compress} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">Compress PDf</h1>
              <p className="text-center text-[14px] mt-4">
                Reduce the size of your PDF without losing quality
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={editpdf} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">Edit PDF</h1>
              <p className="text-center text-[14px] mt-4">
                add text, shapes, images and freehand annotations to your PDF
              </p>
            </div>
          </Link>
          <Link>
            <div className="inner-card h-[250px] w-[200px] border-2 border-white shadow-lg rounded flex flex-col py-6 px-2 items-center">
              <img src={split} alt="" className="w-[70px] h-[70px]" />
              <h1 className="mt-4 font-bold text-[20px]">Split PDF</h1>
              <p className="text-center text-[14px] mt-4">
                Split PDF documents into seperated files
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
