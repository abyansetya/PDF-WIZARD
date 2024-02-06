import React from "react";
import Hero from "../components/compress/Hero";
import Dropcomp from "../components/compress/Dropcomp";
import Combine from "../components/compress/Combine";
import BestCompress from "../components/compress/bestCompress";
import Howto from "../components/compress/Howto";
import Footer from "../components/hero/Footer";

export default function Compress() {
  return (
    <>
      <Hero />
      <Dropcomp />
      <Combine />
      <BestCompress />
      <Howto />
      <Footer />
    </>
  );
}
