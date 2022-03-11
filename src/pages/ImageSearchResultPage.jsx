import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchImageState, resultImageState } from "../data/state";
import NoImageSearchResult from "components/SearchResultPage/NoImageSearchResult";
import {
  ImageSearchImg,
  ImageSearchTitle,
  ImageResultWrapper,
  MoreButton,
} from "../design/SearchResultPage/ImageSearchResultStyles";
import { FlexRowCenterBox, StyledLink } from "../design/commonStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
              <ArrowForwardIosIcon style={{ padding: "2rem" }} />

              <ImageSearchImg
                src={process.env.REACT_APP_DB_IMG + resultImage["image_path"]}
                alt="결과 이미지"
              />
            </FlexRowCenterBox>
            <ImageSearchTitle>
              이 술은{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to top, #F5C085 95%, transparent 50%)",
                }}
              >
                {resultImage["liquor_name_kor"]}({resultImage["liquor_name"]})
              </span>{" "}
              입니다!
            </ImageSearchTitle>
            <StyledLink
              style={{ textDecoration: "underline" }}
              to={`/liquor/${resultImage["liquor_id"]}`}
            >
              <MoreButton>상세정보 보러 가기</MoreButton>
            </StyledLink>
          </>
        ) : (
          <NoImageSearchResult />
        )}
        <StyledLink to="/search">
          <MoreButton onClick={() => resetSearchResult}>
            검색 페이지로 돌아가기
          </MoreButton>
        </StyledLink>
      </ImageResultWrapper>
    </>
  );
}

export default ImageSearchResultPage;
