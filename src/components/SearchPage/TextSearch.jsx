import {
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
  TextSearchContents,
} from "../../design/SearchPage/SearchPageStyles";
function TextSearch() {
  return (
    <>
      <ImageSearchContents>
        <SearchTitle>텍스트로 검색</SearchTitle>
        <SearchDescription>
          양주와 칵테일 이름을 검색해보세요!
        </SearchDescription>
        <TextSearchContents>
          <input />
          <button>검색</button>
        </TextSearchContents>
      </ImageSearchContents>
    </>
  );
}
export default TextSearch;
