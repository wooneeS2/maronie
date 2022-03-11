import React from "react";
import { StyledLink } from "design/commonStyles";
import { mainOrange } from "design/colorPalette";
import {
  IntroductionDiv,
  IntroductionImage,
  IntroductionContent,
  LandingPageButton,
  OrangeTitle,
} from "design/IntroPage/IntroPage";
import introImg1 from "../../assets/intro1.png";
import introImg2 from "../../assets/intro2.png";
import introImg3 from "../..//assets/intro3.png";

export const Introduction1 = () => {
  return (
    <IntroductionDiv>
      <p
        style={{
          alignItems: "start",
          padding: "20px",
          margin: "7vh",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        <span style={{ color: mainOrange }}>마로니에는</span>
        <br />
        <span
          style={{
            background: "linear-gradient(to top, #F5C085 55%, transparent 50%)",
          }}
        >
          맛있는 술을 먹고 싶은 사람들
        </span>
        을<br />
        위해 만들어졌어요.
      </p>

      <IntroductionImage src={introImg1} alt="intro" />
      <IntroductionContent>
        가끔은 양주나 칵테일에 도전하고 싶은 분<br />
        특별한 날에 마실 술을 찾고 있는 분<br />
        집에서 간단하게 맛있는 술을 먹고 싶은 분 <br />
        모두 마로니에가 도와드릴게요!
      </IntroductionContent>
    </IntroductionDiv>
  );
};

export const Introduction2 = () => {
  return (
    <IntroductionDiv style={{ alignItems: "center" }}>
      <p style={OrangeTitle("1.8rem")}>"이 술, 뭔지 모르겠어요!"</p>
      <IntroductionImage src={introImg2} alt="intro" />
      <IntroductionContent>
        마로니에는 이미지 검색을 지원하고 있어요.
        <br />
        집에 있는 술부터
        <br />
        마트에서 자주 보이는 술까지
        <br />
        마로니에에서 검색하고 더 맛있게 먹어봐요!
      </IntroductionContent>
    </IntroductionDiv>
  );
};
export const Introduction3 = () => {
  return (
    <IntroductionDiv style={{ alignItems: "center" }}>
      <p style={OrangeTitle("1.8rem")}>"특별한 칵테일 레시피를 찾고있어요."</p>
      <span style={OrangeTitle("1.4rem")}>
        "내 레시피를 다른 사람과 공유하고싶어요."
      </span>
      <IntroductionImage src={introImg3} alt="intro" />
      <IntroductionContent>
        이 시국, 칵테일 바에 가지 못해 아쉬우신가요?
        <br />
        마로니에에서 맛있는 칵테일 레시피를 찾아 만들어보세요!
        <br />
        집콕 중에 발견한 맛있는 조합을 사람들과 공유해보세요.
        <br /> 언제 어디서나 맛있는 술을 드실 수 있게 마로니에가 도와드릴게요.
      </IntroductionContent>
      <StyledLink to="/search" style={{ width: "100%", cursor: "pointer" }}>
        <LandingPageButton
          backgroundColor={mainOrange}
          style={{ fontSize: "1rem", width: "40%" }}
        >
          여기를 눌러서 마로니에 시작하기
        </LandingPageButton>
      </StyledLink>
    </IntroductionDiv>
  );
};
