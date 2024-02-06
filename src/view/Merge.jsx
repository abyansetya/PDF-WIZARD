import React from "react";
import Hero from "../components/merge/Hero";
import MergeDrop from "../components/merge/MergeDrop";
import Downloadpdf from "../components/merge/Downloadpdf";
import Combine from "../components/merge/Combine";
import Tools from "../components/merge/Tools";
import Howto from "../components/merge/Howto";
import Footer from "../components/hero/Footer";


export default function Merge() {
  return (
    <>
      <Hero />
      <MergeDrop />
      <Combine />
      <Tools />
      <Howto />
      <Footer />
    </>
  );
}
