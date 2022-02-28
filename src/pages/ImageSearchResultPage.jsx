import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../data/state";
import { Link } from "react-router-dom";
import { StyledLink } from "../design/SearchResultPage/TextSearchResultPageStyles";
function ImageSearchResultPage() {
  const [uploadedFile, setUploadedFile] = useRecoilState(imageState);
  const dummyImage =
    "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20";
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
          <p style={{ fontSize: "1.5rem", margin: "10px 0 10px 5px" }}>
            이미지 검색 결과
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "40%" }}
              id="image-for-search"
              alt="이미지 검색 대상"
            />
            <img style={{ width: "40%" }} src={dummyImage} alt="결과 이미지" />
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                margin: "10px 0 10px 5px",
              }}
            >
              술 이름
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p>찾는 술이 아니신가요?</p>
            <button>
              <StyledLink to="/search">다시 하기</StyledLink>
            </button>
          </div>
        </>
      ) : (
        <p>오류페이지</p>
      )}
    </>
  );
}

export default ImageSearchResultPage;
