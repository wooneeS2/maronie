import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchImageState, resultImageState } from "../data/state";
import NoImageSearchResult from "components/SearchResultPage/NoImageSearchResult";
import {
  ImageSearchImg,
  ImageSearchTitle,
  ImageResultWrapper,
} from "../design/SearchResultPage/ImageSearchResultStyles";
import {
  FlexRowCenterBox,
  FlexColumnCenterBox,
  StyledButton,
  StyledLink,
} from "../design/commonStyles";

function ImageSearchResultPage() {
  const [searchImage, setSearchImage] = useRecoilState(searchImageState);
  const [resultImage, setResultImage] = useRecoilState(resultImageState);
  const resetSearchImage = useResetRecoilState(searchImageState);
  const resetResultImage = useResetRecoilState(resultImageState);

  const resetSearchResult = () => {
    resetSearchImage();
    resetResultImage();
  };
  return (
    <>
      <ImageResultWrapper>
        {searchImage && resultImage ? (
          <>
            <FlexRowCenterBox>
              <ImageSearchImg
                id="image-for-search"
                src={searchImage}
                alt="이미지 검색 대상"
              />
              <ImageSearchImg
                src={process.env.REACT_APP_DB_IMG + resultImage["image_path"]}
                alt="결과 이미지"
              />
            </FlexRowCenterBox>
            <ImageSearchTitle>
              이 술은{" "}
              <StyledLink
                style={{ textDecoration: "underline" }}
                to={`/liquor/${resultImage["liquor_id"]}`}
              >
                {resultImage["liquor_name_kor"]}({resultImage["liquor_name"]})
              </StyledLink>
              입니다!
            </ImageSearchTitle>
            <FlexColumnCenterBox>
              <p style={{ marginBottom: "1px" }}>찾는 술이 아니신가요?</p>
            </FlexColumnCenterBox>
          </>
        ) : (
          <NoImageSearchResult />
        )}
        <StyledLink to="/search">
          <StyledButton onClick={() => resetSearchResult}>
            검색 페이지로 돌아가기
          </StyledButton>
        </StyledLink>
      </ImageResultWrapper>
    </>
  );
}

export default ImageSearchResultPage;
