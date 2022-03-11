import styled, { keyframes } from "styled-components";
import { mainOrange, mainWhite } from "../colorPalette";
import GlobalStyles from "design/GlobalStyles";

export const MainTitle = styled.p`
  @font-face {
    font-family: "ROEHOE-CHAN";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/ROEHOE-CHAN.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0 0 10px white;
  font-family: ROEHOE-CHAN;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: GimpoGothicBold00;

  margin: 8px;
`;

export const MainPageTextDiv = styled.div`
  text-align: center;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
`;

export const MainPageDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
  color: white;
`;

export const VideoAndContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  object-fit: cover;
`;

export const StyledVideo = styled.video`
  position: absolute;
  display: block;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`;

export const LandingPageButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  padding: 10px;
  width: 55%;
  border: solid 2px ${mainOrange};
  color: white;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 10px;
`;

export const MoreInfoText = styled.span`
  display: block;
  font-size: 0.8rem;
`;

const iconMotion = keyframes`
0% {
  top: -2px;
}
50% {
  top: 2px;
}
100% {
  top: -2px;
}
`;

export const MoreInfoIcon = styled.span`
  font-size: 1.5rem;
  align-items: flex-end;
  animation: ${iconMotion} 2s infinite;
`;

export const TopMenuButton = styled.div`
  display: flex;
  position: absolute;
  font-size: 2rem;
  justify-content: flex-end;
  z-index: 10;
  width: 95%;
  margin-top: 20px;
  &svg: {
    color: white;
  }
`;

export const IntroductionImage = styled.img`
  width: 70%;
  height: 40vh;
  max-height: 300px;
  align-items: center;
  margin: 0 auto;
`;

export const IntroductionDiv = styled.div`
  height: 100vh;
  display: flex;
  margin: 10px;
  flex-direction: column;
  background-color: ${mainWhite};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  align-items: center;
  justify-content: center;
`;

export const IntroductionContent = styled.p`
  padding: 15px;
  margin: 20px;
  text-align: center;
`;

export const OrangeTitle = fontSize => {
  return {
    fontSize: fontSize,
    color: `${mainOrange}`,
    fontWeight: "bold",
    display: "block",
    textAlign: "center",
    paddingTop: "30px",
    fontFamily: "GimpoGothicBold00",
  };
};
