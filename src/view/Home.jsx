import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import Tools from "../components/hero/Tools";
import Simple from "../components/hero/Simple";
import Editpdf from "../components/hero/Editpdf";
import Testimonials from "../components/hero/Testimonials";
import Company from "../components/hero/Company";
import Premium from "../components/hero/Premium";
import Footer from "../components/hero/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home - PDF_Supreme";
  }, []);
  return (
    <>
      <Hero />
      <Tools />
      <Simple />
      <Editpdf />
      <Testimonials />
      <Company />
      <Premium />
      <Footer />
    </>
  );
}
