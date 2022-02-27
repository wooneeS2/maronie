import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../data/state";
import { Link } from "react-router-dom";
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
          <p>이미지 검색 결과</p>
          <img id="image-for-search" alt="이미지 검색 대상" />
          <img src={dummyImage} />
          <p>찾는 술이 아니신가요?</p>
          <button>
            <Link to="/search">다시 하기</Link>
          </button>
        </>
      ) : (
        <p>오류페이지</p>
      )}
    </>
  );
}

export default ImageSearchResultPage;
