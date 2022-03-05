import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
// import { headerHeightState } from "../data/state";
import { headerHeightState } from "../data/state";
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
  const headerHeight = useRecoilValue(headerHeightState);

  if (headerHeight === 0) {
    return null;
  }

  return (
    <>
      <MainPageDiv paddingTop={headerHeight}>
        <VideoAndContentWrapper>
          <StyledVideo muted autoPlay loop>
            <source src={introVideo} type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </StyledVideo>

          <MainPageTextDiv>
            <div>마로니에</div>
            <div>subtitle 맛있는 술을 먹고싶은 당신을 위한</div>
            {/* <MainTitle>마로니에</MainTitle>

            <SubTitle>
              "맛있는 술을 먹고 싶은 당신을 위한
              <br />
              양주 라벨 검색 및 칵테일 레시피 공유 서비스"
            </SubTitle>
            <Link to={"/search"}>
              <RegisterButton
                style={{
                  position: "relative",
                  top: "8rem",
                  width: "50%",
                }}
              >
                마로니에 시작하기
              </RegisterButton>
            </Link> */}
          </MainPageTextDiv>
        </VideoAndContentWrapper>
      </MainPageDiv>
    </>
  );
}

const VideoAndContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const StyledVideo = styled.video`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
`;

export default IntroPage;
