import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../data/state";
import { Link } from "react-router-dom";
function ImageSearchResultPage() {
  const [uploadedFile, setUploadedFile] = useRecoilState(imageState);
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
