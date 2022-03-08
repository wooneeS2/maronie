import React, { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { headerHeightState } from "../data/state";
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
