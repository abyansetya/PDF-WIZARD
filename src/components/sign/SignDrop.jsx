import React, { useState, useEffect, useMemo } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDropzone } from "react-dropzone";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import { Document, Page } from "react-pdf";

import { useNavigate, redirect } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";
import { MdZoomIn } from "react-icons/md";
import upload from "../../assets/upload.svg";

export default function SignDrop() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    formatError: "",
    sizeError: "",
  });
  const [mergeComplete, setMergeComplete] = useState(false);
  const navigate = useNavigate();

  const clearError = () => {
    setErrorMessage({ formatError: "", sizeError: "" });
  };

  useEffect(() => {
    const timer = setTimeout(clearError, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const onDrop = async (acceptedFiles) => {
    setLoading(true);
    const files = acceptedFiles.filter(
      (file) => file.type === "application/pdf" && file.size <= 10 * 1024 * 1024
    );

    if (files.length === 0) {
      setLoading(false);
      setLoading(false);
      const isInvalidFormat = acceptedFiles.some(
        (file) => file.type !== "application/pdf"
      );
      const isSizeExceeded = acceptedFiles.some(
        (file) => file.size > 10 * 1024 * 1024
      );

      if (isInvalidFormat && isSizeExceeded) {
        setErrorMessage({
          formatError: "Error: Invalid file format. Please upload PDF files.",
          sizeError: "Error: File size exceeds the maximum limit of 10MB",
        });
      } else if (isInvalidFormat) {
        setErrorMessage({
          formatError: "Error: Invalid file format. Please upload PDF files.",
          sizeError: "",
        });
      } else if (isSizeExceeded) {
        setErrorMessage({
          formatError: "",
          sizeError: "Error: File size exceeds the maximum limit of 10MB",
        });
      }
      return;
    }

    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result;
          const typedArray = new Uint8Array(arrayBuffer);
          const pdfData = new Blob([typedArray], { type: "application/pdf" });
          resolve({
            pdf: { url: URL.createObjectURL(pdfData) },
            name: file.name,
          });
        };
        reader.onerror = () => {
          reject(new Error("Failed to lad the PDF files."));
        };
        reader.readAsArrayBuffer(file);
      });
    });

    try {
      const results = await Promise.all(promises);
      setPdfs((prevPdfs) => [
        ...prevPdfs,
        ...results.map((result) => result.pdf),
      ]);
      setUploadedFileNames((prevNames) => [
        ...prevNames,
        ...results.map((result) => result.name),
      ]);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessage({
        formatError: "",
        sizeError: "Error: Failed to load some PDF files. Please try again.",
      });
    }

    setLoading(false);
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop });

  const handleDeleteAll = () => {
    setPdfs([]);
    setUploadedFileNames([]);
  };

  const handleDeleteFile = (index) => {
    setPdfs((prevPdfs) => {
      const updatedPdfs = [...prevPdfs];
      updatedPdfs.splice(index, 1);
      return updatedPdfs;
    });

    setUploadedFileNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames.splice(index, 1);
      return updatedNames;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPDF = (index) => {
    setSelectedPdfIndex(index);
    setCurrentPage(1);
    setIsModalOpen(true);
  };

  const handleMerge = () => {
    setLoading2(true);

    setTimeout(() => {
      setLoading2(false);
      setMergeComplete(true);
    }, 2000);
  };

  useEffect(() => {
    if (mergeComplete) {
      navigate("/sign_pdf");
    }
  }, [mergeComplete, navigate]);

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="containy max-w-[960px] px-[0.75rem] mr-auto ml-auto font-jakarta ">
      <div className="wrapper flex items-center justify-center relative bg-[#e76a6a] rounded-[10px] my-[50px]">
        <div className="dropzone flex flex-col justify-center items-center w-full h-[250px]  m-[20px] box-border relative bg-[#e76a6a] border-2 border-white border-dashed rounded-[10px] hover:border-[#1FB6FC] ">
          {loading ? (
            <div className="loading text-white text-[18px] mb-[20px] ">
              Uploading <div className="spinner"></div>
            </div>
          ) : (
            <div className="content flex flex-col items-center justify-center w-full h-full p-[5px] ">
              {pdfs.length > 0 ? (
                <div className="pdf-review w-full h-full flex justify-start items-center relative bg-white p-[20px]">
                  {pdfs.map((pdf, index) => (
                    <div
                      key={index}
                      style={{ color: "black", margin: "0 10px" }}
                    >
                      <Document file={pdf}>
                        <Page
                          pageNumber={1}
                          width={60}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                      <p className="uploadedFileName  text-[12px] mb-0 text-center">
                        {uploadedFileNames[index]}
                      </p>
                      <div className="flex">
                        <button
                          onClick={() => handleViewPDF(index)}
                          className="pdf-btn text-[12px] text-black bg-transparent border-none m-[5px]"
                        >
                          <MdZoomIn />
                        </button>
                        <button
                          onClick={() => handleDeleteFile(index)}
                          className="pdf-btn text-[12px] text-black bg-transparent border-none m-[5px]"
                        >
                          <FaRegTrashCan />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="uploaded-btn absolute bottom-0 left-[33%] mb-[10px]">
                    {loading2 ? (
                      <div className="loading-div bg-[#e76a6a] text-white z-[99999] fixed top-0 left-0 w-full h-full flex justify-center items-center">
                        <div className="loading text-[18px] mb-[20px] bg-[e76a6a] text-white z-[99999]">
                          Signing PDFs
                          <div className="spinner h-[100px] w-[100px]"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-5 w-full">
                        <button
                          onClick={handleDeleteAll}
                          className="text-[13px] w-[100px] border-2 p-2 rounded border-none bg-merah text-white"
                        >
                          <p>Delete All</p>
                        </button>
                        <button
                          className="text-[13px] w-[100px] border-2 p-2 rounded border-none bg-merah text-white"
                          onClick={handleDeleteAll}
                        >
                          <p>Upload again</p>
                        </button>
                        <button
                          className="text-[13px] w-[100px] border-2 p-2 rounded border-none bg-merah text-white"
                          onClick={handleMerge}
                        >
                          <p> Sign PDF</p>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="upload flex flex-col items-center justify-center h-full w-full"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <img src={upload} className="w-[100px]" alt="" />
                  <div>
                    <button className="bg-white rounded-[5px] mt-[10px] py-[7px] px-[15px] text-black">
                      Choose File
                    </button>
                  </div>
                  <p className="text-white">OR</p>
                  <p className="text-white">drop PDFs here</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
