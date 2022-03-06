import React, { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { headerHeightState } from "../data/state";
import LandingPage from "../components/introPage/LandingPage";

function IntroPage() {
  return (
    <>
      <LandingPage />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default IntroPage;
