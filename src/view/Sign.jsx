import React from "react";
import Hero from "../components/sign/Hero";
import SignDrop from "../components/sign/SignDrop";
import Combine from "../components/sign/Combine";
import Quicker from "../components/sign/Quicker";
import Collect from "../components/sign/Collect";
import Howto from "../components/sign/Howto";
import Footer from "../components/hero/Footer";

export default function Sign() {
  return (
    <>
      <Hero />
      <SignDrop />
      <Combine />
      <Quicker />
      <Collect />
      <Howto />
      <Footer />
    </>
  );
}
