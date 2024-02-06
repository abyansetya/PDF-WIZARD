import React from "react";
import howto from "../../assets/howtosign.svg";

export default function Howto() {
  return (
    <div className="px-[6em] py-[8em] w-full flex">
      <div className="innercontainy flex  flex-row-reverse w-full justify-center items-center gap-[100px]">
        <img src={howto} alt="" className="w-[400px]" />
        <div className="text">
          <h1 className="font-bold text-[24px]">
            How to Sign a PDF Document Online:
          </h1>
          <ol className="mt-4">
            <li className="mb-2">1. Upload your PDF to Smallpdf eSign</li>
            <li className="mb-2">
              2. Create a new e-signature to place on your document
            </li>
            <li className="mb-2">3. Add text and a date if needed</li>
            <li>
              4. Click “Finish & Sign,” then download or share your signed
              document
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
