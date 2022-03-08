import React from "react";
import LandingPage from "../components/introPage/LandingPage";
import {
  Introduction1,
  Introduction2,
  Introduction3,
} from "../components/header/introductionComponents";

function IntroPage() {
  return (
    <>
      <LandingPage />
      <Introduction1 />
      <Introduction2 />
      <Introduction3 />
    </>
  );
}

export default IntroPage;
