import React from "react";
import { Link } from "react-router-dom";
function ImageSearchResultPage() {
  return (
    <>
      <p>이미지 검색 결과</p>
      <p>찾는 술이 아니신가요?</p>
      <button>
        <Link to="/search">다시 하기</Link>
      </button>
    </>
  );
}

export default ImageSearchResultPage;
