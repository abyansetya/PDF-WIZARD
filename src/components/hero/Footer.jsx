import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-[6em] py-[3em] bg-[#edd3d3]">
      <div className="flex w-full justify-between">
        <div className="sosmed">
          <h1 className="font-bold text-[20px]">PDF Wizard</h1>
          <p className=" pt-7">
            A small river named Duden flows by their place <br /> and supplies
            it with the necessary regelialia.
          </p>
          <div className="sosmed flex pt-6 gap-[20px] items-center">
            <a href="#">
              <BsTwitterX className="text-[20px]" />
            </a>
            <a href="#">
              <FaInstagram className="text-[23px]" />
            </a>
            <a href="#">
              <FaFacebook className="text-[23px]" />
            </a>
          </div>
        </div>
        <div className="explore">
          <h1 className="font-bold text-[20px]">Explore</h1>
          <p className="pt-7">About Us</p>
          <p className="mt-2">Services</p>
          <p className="mt-2">Works</p>
          <p className="mt-2">Blog</p>
          <p className="mt-2">Contact Us</p>
        </div>
        <div className="Quick">
          <h1 className="font-bold text-[20px]">Quick Links</h1>
          <p className="pt-7">Contact Us</p>
          <p className="mt-2">Pricing</p>
          <p className="mt-2">Terms & Conditions</p>
          <p className="mt-2">Privacy</p>
          <p className="mt-2">Feedbacks</p>
        </div>
        <div className="Question">
          <h1 className="font-bold text-[20px]">Have a Questions?</h1>
          <p className="pt-7">Lorem ipsum dolor sit amet.</p>
          <p className="mt-2">08273351728</p>
          <p className="mt-2">pdfwizard@information.com</p>
        </div>
      </div>
    </div>
  );
}
