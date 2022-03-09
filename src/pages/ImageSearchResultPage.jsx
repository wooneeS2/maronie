import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../data/state";
import ErrorPage from "./ErrorPage";
import {
  ImageSearchImg,
  ImageSearchTitle,
  ImageResultWrapper,
} from "../design/SearchResultPage/ImageSearchResult";
import {
  FlexRowCenterBox,
  FlexColumnCenterBox,
  StyledButton,
  StyledLink,
} from "../design/commonStyles";

function ImageSearchResultPage() {
  const [uploadedFile, setUploadedFile] = useRecoilState(imageState);
  //test data
  const dummyImage =
    "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20";
  const [resultName, setResultName] = React.useState("봄베이 사파이어");
  const [resultId, setResultId] = React.useState(1);
  let fr = new FileReader();
  if (uploadedFile) {
    fr.readAsDataURL(uploadedFile);
  }
  fr.onload = function () {
    document.getElementById("image-for-search").src = fr.result;
  };

  return (
    <>
      {/* TODO 새로고침하면 오류페이지로 이동, 계속 저장할지 말지  */}
      {uploadedFile ? (
        <>
          <ImageResultWrapper>
            <FlexRowCenterBox>
              <ImageSearchImg id="image-for-search" alt="이미지 검색 대상" />
              <ImageSearchImg src={dummyImage} alt="결과 이미지" />
            </FlexRowCenterBox>
            <ImageSearchTitle>
              이 술은{" "}
              <StyledLink style={{ textDecoration: "underline" }} to={resultId}>
                {resultName}
              </StyledLink>
              입니다!
            </ImageSearchTitle>
            <FlexColumnCenterBox>
              <p style={{ marginBottom: "1px" }}>찾는 술이 아니신가요?</p>
              <StyledLink to="/search">
                <StyledButton>검색 페이지로 돌아가기</StyledButton>
              </StyledLink>
            </FlexColumnCenterBox>
          </ImageResultWrapper>
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default ImageSearchResultPage;
