import React from "react";
import introVideo from "../assets/intro-video.mp4";
import { RegisterButton, ImgWrapper } from "../design/commonStyles";
import {
  MainTitle,
  MainPageTextDiv,
  MainPageDiv,
  SubTitle,
} from "../design/IntroPage/IntroPage";
import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <>
      <MainPageDiv>
        <ImgWrapper
          style={{
            minHeight: "100vh",
            opacity: "0.7",
          }}
        >
          <video muted autoPlay loop>
            <source src={introVideo} type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </video>
        </ImgWrapper>

        <MainPageTextDiv>
          <MainTitle>마로니에</MainTitle>

          <SubTitle>
            "맛있는 술을 먹고 싶은 당신을 위한
            <br />
            양주 라벨 검색 및 칵테일 레시피 공유 서비스"
          </SubTitle>
          <Link to={"/search"}>
            <RegisterButton
              style={{
                position: "relative",
                top: "10rem",
                width: "50%",
              }}
            >
              마로니에 시작하기
            </RegisterButton>
          </Link>
        </MainPageTextDiv>
      </MainPageDiv>
    </>
  );
}

export default IntroPage;
