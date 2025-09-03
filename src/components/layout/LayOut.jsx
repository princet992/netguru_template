import { lazy } from "react";
import HeroSection from "../../pages/HeroSection"
const CaseStudy = lazy(() => import("../../pages/CaseStudy"));
const Product = lazy(() => import("../../pages/Product"));
const Client = lazy(() => import("../../pages/Client"));
const Insights = lazy(() => import("../../pages/Insights"));
const Experience = lazy(() => import("../../pages/Experience"));
const BgProduct = lazy(() => import("../../pages/BgProduct"));
const Contact = lazy(() => import("../../pages/Contact"));
const Certificate = lazy(() => import("../../pages/Certificate"));
const Recognized = lazy(() => import("../../pages/Recognized"));

const LayOut = () => {
  return (
    <>
      <HeroSection />
      <CaseStudy />
      <Product />
      <Client />
      <Insights />
      <Experience />
      <BgProduct />
      <Contact />
      <Certificate />
      <Recognized />
    </>
  );
};

export default LayOut;
