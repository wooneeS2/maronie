import { React, useRef, useState } from "react";
import introVideo from "../../assets/intro-video.mp4";
import { StyledLink } from "../../design/commonStyles";
import {
  MainTitle,
  MainPageTextDiv,
  MainPageDiv,
  SubTitle,
  VideoAndContentWrapper,
  StyledVideo,
  LandingPageButton,
  MoreInfoIcon,
  MoreInfoText,
  TopMenuButton,
} from "../../design/IntroPage/IntroPage";
import { FaChevronDown } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { mainOrange } from "../../design/colorPalette";
import MenuList from "../header/MenuList";

export function LandingPage() {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef < HTMLDivElement > null;
  const moveNextPage = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleMenu = () => {
    setVisible(!visible);
  };
  return (
    <MainPageDiv>
      <VideoAndContentWrapper>
        <StyledVideo muted autoPlay loop>
          <source src={introVideo} type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </StyledVideo>
        <TopMenuButton onClick={handleMenu}>
          {<MenuIcon color="white" />}
          <MenuList isLogin={true} visible={visible} />
        </TopMenuButton>
        <MainPageTextDiv>
          <span>
            <MainTitle>Maronie</MainTitle>
            <SubTitle style={{ marginTop: "2rem" }}>
              양주 라벨 검색 및<br /> 칵테일 레시피 공유 서비스
            </SubTitle>
          </span>
          <div>
            <StyledLink to={"/search"}>
              <LandingPageButton backgroundColor={mainOrange}>
                시작하기
              </LandingPageButton>
            </StyledLink>
            <StyledLink to={"/signup"}>
              <LandingPageButton backgroundColor={"transparent"}>
                회원가입
              </LandingPageButton>
            </StyledLink>
          </div>
          <div>
            <MoreInfoText>more info</MoreInfoText>
            <MoreInfoIcon>
              <FaChevronDown onClick={moveNextPage} />
            </MoreInfoIcon>
          </div>
        </MainPageTextDiv>
      </VideoAndContentWrapper>
    </MainPageDiv>
  );
}

export default LandingPage;
